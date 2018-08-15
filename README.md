# wechat.mp.frame 小程序开发框架

![build](https://img.shields.io/badge/build-passing-brightgreen.svg)
![coverage](	https://img.shields.io/coveralls/github/jekyll/jekyll.svg)
![npm](https://img.shields.io/badge/npm-6.1.0-blue.svg)
![wepy](https://img.shields.io/badge/wepy-1.7.2-blue.svg)
![license](https://img.shields.io/badge/license-MIT-green.svg)

## 入门指南

入门的前提是你已经安装了 `node` 环境，如果已经安装的话可以接着往下看，如果没有安装的话，可以看下 [Node.js安装及环境配置之Windows篇](https://www.jianshu.com/p/03a76b2e7e00)，根据文章安装配置一下。

## 安装使用

#### 安装（更新） wepy 命令行工具。

> 不要用 cnpm 安装

```
npm install wepy-cli -g
```

如果安装很慢，或者安装失败，点击这里[wepy-cli安装的很慢怎么办](https://github.com/Saberization/wechat-app-frame/issues/1)

#### 安装依赖

```
cd epoint.wechat.miniappframe
npm install
```

#### 开发实时编译

```
wepy build --watch
```

## 预览

打开[微信官方小程序开发工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，选择小程序项目

![](https://ws1.sinaimg.cn/large/006d7zD3gy1fu17l4tbnkj30os0wkadx.jpg)

点击右下角的 `➕`

![](https://ws1.sinaimg.cn/large/006d7zD3gy1fu17nl456ij31500wkdkc.jpg)

项目目录选择 `wechat.mp.frame -> dist` 目录

![](https://ws1.sinaimg.cn/large/006d7zD3gy1fu17p0f8d7j31d00ugdrs.jpg)

填写完毕后点确定

![](https://ws1.sinaimg.cn/large/006d7zD3gy1fu17pykpg4j30t20wktd5.jpg)

进入开发工具后，点击 `设置` -> `项目设置`

![](https://ws1.sinaimg.cn/large/006d7zD3gy1fu01m3bgyvj30u80fowi0.jpg)

将如下几个去掉勾选

- ES6 转 ES5
- 上传代码时样式自动补全
- 上传代码时自动压缩

__注意：__ 如果接口不是 `https` 协议的话，需要将 `不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书` 选项打钩。

如图：

![](https://ws1.sinaimg.cn/large/006d7zD3gy1fu01pkom8jj30k40cyq42.jpg)

进行好以上操作步骤，可以看到我们的首页已经出来了，接下来就可以进行开发了。

![](https://ws1.sinaimg.cn/large/006d7zD3gy1fu17qyjkdbj31r41a8n95.jpg)

## 附录

- [微信小程序官方api文档](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
- [wepy官方文档](https://tencent.github.io/wepy/document.html#/)