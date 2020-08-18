
export default function ({ store, redirect, $axios, route }) {
    // 数据访问前缀
    $axios.defaults.baseURL = 'http://223.70.216.110:30188'
    // request拦截器，我这里设置了一个token，当然你可以不要
    $axios.onRequest(config => {
        // config.headers.common['authorization'] = store.state.token
        config.headers.common['Authorization'] = ''
        // console.log('server===========',config.headers)
    })
    $axios.onError(error => {
        console.log(error)
    })
    // response拦截器，数据返回后，你可以先在这里进行一个简单的判断
    $axios.interceptors.response.use(response => {
        // console.log('server===========',response.data)
        if (response.data.success == false) {
            console.log("请求失败");
            return;
        }
        return response
    }, err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400: err.message = '请求错误(400)'; break;
                case 401: return history.push('/login'); break;
                case 403: err.message = '拒绝访问(403)'; break;
                case 404: err.message = '请求出错(404)'; break;
                case 408: err.message = '请求超时(408)'; break;
                case 500: err.message = '服务器错误(500)'; break;
                case 501: err.message = '服务未实现(501)'; break;
                case 502: err.message = '网络错误(502)'; break;
                case 503: err.message = '服务不可用(503)'; break;
                case 504: err.message = '网络超时(504)'; break;
                case 505: err.message = 'HTTP版本不受支持(505)'; break;
                default: err.message = `连接出错(${err.response.status})!`;
            }
        } else {
            err.message = '连接服务器失败!'
        }
        return Promise.reject(err);
    })
}