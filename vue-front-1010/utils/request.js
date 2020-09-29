import axios from 'axios'
import cookie from 'js-cookie'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:9001', // api的base_url
  timeout: 20000 // 请求超时时间
})
// http 拦截器
service.interceptors.request.use(
  config => {
    if ( cookie.get("guli_token") ) {
      config.headers['token'] = cookie.get("guli_token")
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)

export default service