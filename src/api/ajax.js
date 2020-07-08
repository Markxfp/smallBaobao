//ajax请求函数模块
export default function ajax(url, data = {}, type = 'GET') {
    return new Promise((resolve, reject) => {
        let promise;
        if (type == 'GET') {
            let dataStr = '';
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&';
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.length - 1);
                url = url + '?' + dataStr
            }
            promise = axios.get(url)
        } else {
            promise = axios.post(url, data)
        }
        promise.than(response => {
            resolve(response.data);
        }).catch(error => {
            reject(error);
        })
    })

}