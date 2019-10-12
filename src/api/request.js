/**
 * 对request.js网络请求工具进行简单封装
 */
import axios from 'axios';
import { message } from 'antd';
const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。'
};
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  //给所有请求添加自定义header
  config.timeout = 5000;// 请求超时时间
  config.withCredentials = true;// 允许跨域请求带cookie
  config.baseURL = "";
  let userInfo = localStorage.getItem("userInfo");
  if (userInfo !== null) {
    userInfo = JSON.parse(userInfo);
    config.headers.Authorization = userInfo.token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  error.response.data = codeMessage[error.response.status];
  return Promise.reject(error);
});

const request = (obj) => {
	//直接调用axios函数发起post请求
	return new Promise((resolve, reject) => {
		if (obj.url && obj.method) {
        axios.request({
          url: obj.url,
          method: obj.method || "get",
          data: obj.data
        })
				.then((res) => {
          // 状态码为200
					if (res.status == 200) {
						let data = res.data;
						resolve(data);
					} else {
						reject(res);
					}
				})
				.catch((err) => {
					reject(err);
				});
		} else {
			message.error("参数缺失");
		}
	});
}

const myRequest = {
	get(url, data = {}) {
		return request({
			url,
			data,
			method: "get"
		});
	},
	post(url, data = {}) {
		return request({
			url,
			data,
			method: "post"
		});
	}
}

export default myRequest;