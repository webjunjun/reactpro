import Mock from "mockjs";// 引入mockjs
const Random = Mock.Random;// Mock.Random 是一个工具类，用于生成各种随机数据

//模拟获取用户列表
const logIn = (params) => {
    return {
        code: 2000,
        data: JSON.parse(params.body)
    };
}

export {
    logIn
}