/**
 * 封装Axios
 * 处理请求、响应错误信息
 */
import { Message } from 'element-ui';  // 引用饿了么UI消息组件
import { getCookie } from '~/utils/storage';
import axios from 'axios'; // 引用axios
const service = axios.create({
  baseURL: process.env.API_URL, // 所有异步请求都加上/api,nginx转发到后端Springboot
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30 * 1000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    let token = getCookie('userInfo');
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
	 * If you want to get http information such as headers or status
	 * Please return  response => response
	 */

  /**
	 * Determine the request status by custom code
	 * Here is just an example
	 * You can also judge the status by HTTP Status Code
	 */
  response => {
    // console.log('client===========',response.data)
    // if (response.data && String(response.data.code) === '1000') {
    //   if (response.data.msg == '无效的ssocode') {
    //     store.dispatch('user/resetToken').then(() => {
    //       Message({
    //         message: '登录失效，请重新登录！',
    //         type: 'error',
    //         duration: 3 * 1000
    //       });
    //       window.location.href = `${location.origin}/#/login`;
    //     });
    //   } else {
    //     Message({
    //       message: response.data.msg,
    //       type: 'error',
    //       duration: 3 * 1000
    //     });
    //   }
    // }
    // if (response.data && String(response.data.code) === '1001') {
    //   Message({
    //     message: response.data.msg,
    //     type: 'error',
    //     duration: 3 * 1000
    //   });
    //   store.dispatch('user/resetToken').then(() => {
    //     location.reload();
    //   });
    // }

    // if (response.data && String(response.data.code) === '401') { // 401, token失效
    //   store.dispatch('user/resetToken').then(() => {
    //     window.location.href = `${location.origin}/#/login`;
    //   });
    // }
    Message({
      message: '喂喂喂，呼呼！！！',
      type: 'error',
      duration: 3 * 1000
    });
    return response.data;
  },
  error => {
    console.log('err' + error); // for debug
    // Message({
    // 	message: error.message,
    // 	type: 'error',
    // 	duration: 5 * 1000
    // })
    return Promise.reject(error);
  }
);

export default service; // 导出封装后的axios