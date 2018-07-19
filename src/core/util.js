export default {
    /**
     * 判断数组是否是二维数组
     * @param {Array} arr 
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
    }
}