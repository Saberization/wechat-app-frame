## 一、小程序开发有哪些痛点

1) 频繁调用 `setData` 及 `setData` 过程中页面跳闪
2) 组件化支持能力太弱(几乎没有)
3) 不能使用 `less、jade` 等
4) 无法使用 `NPM` 包及 `ES` 高级语法
5) `request` 并发次数限制
6) 一个页面对应 `4` 个文件，看的眼花缭乱

## 二、wepy基础介绍

### 2.1 相比原生小程序开发的优势

开发风格：

> 接近于 Vue.js，支持组件 Props 传值，自定义事件、组件分布式复用Mixin、计算属性函数computed、模板内容分发slot等等

组件化：

> 组件化开发，完美解决组件隔离，组件嵌套，组件通信等问题

NPM：

> 支持使用第三方 npm 资源，自动处理 npm 资源之间的依赖关系，完美兼容所有无平台依赖的 npm 资源包

Promise:

> 通过 polyfill 让小程序完美支持 Promise，解决回调烦恼

ES2015:

> 可使用 Generator Fu-nction / Class / Async Function 等特性，大大提升开发效率

优化:

> 对小程序本身的优化，如请求列对处理，优雅的事件处理，生命周期的补充，性能的优化等等

编译器:

> 支持样式编译器：Less/Sass/Styus，模板编译器：wx-ml/Pug，代码编译器：Babel/Typescript。

插件:

> 支持多种插件处理，如文件压缩，图片压缩，内容替换等，扩展简单,使用方便

框架大小:

> 压缩后 24.3KB 即可拥有所有框架功能，额外增加 8.9 KB后即可使用 Promise 和 Async Function

先花3、5分钟看一下 [微信小程序组件化开发框架WePY官方文档](https://tencent.github.io/wepy/document.html#/?id=%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96%E5%BC%80%E5%8F%91%E6%A1%86%E6%9E%B6wepy%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3)

这些写小程序是不是很舒服：

```js
<style lang="css">

</style>

<template>
    <view class="container"></view>
</template>

<script>
import wepy from 'wepy'

export default class Toast extends wepy.page {
  config = {
    navigationBarTitleText: 'Toast 轻提示'
  }
  components = {}
  data = {}
  methods = {
  }
  onLoad() {}
}
</script>
```

## 三、wepy 使用注意事项

由于类 `Vue` 的开发风格，使得开发效率变高了，一个页面对应一个文件，后期维护变得更简单了。然而，因为微信的种种限制以及 `wepy` 的黑魔法，导致我们不能随心所欲的管理应用。

### 3.1 数据管理问题

组件间的数据可以使用框架提供的 `$emit` `$broast` 等方法，但页面之间的数据，就需要我们手动管理，非常麻烦且易于出错。

就目前来看，主要有四种方案可以选择：

- `Gloabal` 对象或 `Storage`

>  使用微信提供的`getApp()`方法，可以在页面间随意访问和改写这个对象。

- `EventBus`

> 通过订阅/发布事件的方式，共享数据

- `Store`

> 创建一个存储类来管理数据，本质上和`Storage`类似，但不能直接对数据进行修改而通过action触发数据变更。

- `wepy-redux`

> 其实官方还是提供了`redux`方案，但没有在文档中暴露出来，使用`wepy new demo --redux`创建。

### 3.2 数据预加载优化

#### 预加载数据

用于 page1 主动传递数据给 page2，比如 page2 需要加载一份耗时很长的数据。我可以在 page1 闲时先加载好，进入 page2 时直接就可以使用。

#### 预查询数据

用于避免于 redirecting 延时，在跳转时调用 page2 预查询。

它扩展了页面生命周期，添加了 `onPrefetch` 事件，使得在 `$redirect/$navigate` 之时被主动调用。同时，给 `onLoad` 事件添加了一个参数，用于接收预加载或者是预查询的数据，如下：

```
// params
// data.from: 来源页面，page1
// data.prefetch: 预查询数据
// data.preload: 预加载数据
onLoad (params, data) {}
```

预加载数据示例：

```js
// page1.wpy 预先加载 page2 需要的数据。
methods: {
  tap () {
    this.$redirect('./page2');
  }
},
onLoad () {
  setTimeout(() => {
    this.$preload('list', api.getBigList())
  }, 3000)
}

// page2.wpy 直接从参数中拿到 page1 中预先加载的数据
onLoad (params, data) {
  data.preload.list.then((list) => render(list));

```