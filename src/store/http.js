import axios from 'axios';
import qs from 'qs'

// 全局配置
// axios.defaults.headers.common["token"] = ""
axios.defaults.headers.post["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://134.175.100.63:6677';

// 配置请求拦截
axios.interceptors.request.use(function (config) {
  // 手动将参数转换为查询字符串，为了呼应设置Content-type = 'application/x-www-form-urlencoded;charset=UTF-8';
  if(config.method === "post"){
    config.data = qs.stringify(config.data)
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // 将后台的参数结果设置到response
  let {data} = response;
  response.data = data.data;
  response.status = data.status;
  response.statusText = data.message;
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default axios;