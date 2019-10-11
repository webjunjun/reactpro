import $http from './request';

const login = (data) => $http.post('', data);

export {
    login
};