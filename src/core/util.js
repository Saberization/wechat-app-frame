export default {
    /**
     * 判断数组是否是二维数组
     * @param {any} arr
     * @return {Boolean} true or false
     */
    isMultiArray(arr) {
        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length; i < len; i++) {
                const item = arr[i];

                if (Array.isArray(item)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }

        return false;
    },

    /**
     * 判断数据是否是obj
     * @param {any} data
     * @return {Boolean} true or false
     */
    isObject(data) {
        return Object.prototype.toString.call(data).includes('Object');
    }
}