import $http from './request';

const login = (data) => $http.post('/user/login', data);// 登录
const register = (data) => $http.post('/user/register', data);// 登录

export {
    login,
    register
};