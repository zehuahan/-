const url = "http://smail.com/?a=1&b=2&c=xx&d#hash"
// 用于接收url中的数据
const result = {}  
function field(url) {
    // 截取“?”和“#”之间的数据，并存储为数组
    const query = url.split("?")[1].split("#")[0].split("&")
    // 利用forEach遍历数组解析为对象格式
    query.forEach(function (item) {
        // 注意!!   value不能用const声明，下面需要更改数据类型
        let key = item.split("=")[0]
        let value = item.split("=")[1]
        // 判断如果为undefined的话就让他变为空字符串
        if (value == undefined) {
            value = ''
        }
        result[key] = value
    })
    return result
}
field(url)
console.log(result)