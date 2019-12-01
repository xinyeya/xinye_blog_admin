import axios from 'axios'
// import store from '@/store'
// import router from '@/router'
// import JSONbig from 'json-bigint'

const request = axios.create({
  baseURL: 'http://xiaoai.com'
})

// 防止后端传递的数值过大，损失精度，在此转为json字符串
// request.defaults.transformResponse = [function (data) {
//   try {
//     // data可能不是标准的json数据，使用JSON.parse()转换出错
//     return JSONbig(data)
//   } catch (err) {
//     // 无法转换直接返回
//     return data
//   }
// }]

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 判断用户是否已经登录
  // const { userinfo } = store.state
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default request
