import Mock from "mockjs";// 引入mockjs
const Random = Mock.Random;// Mock.Random 是一个工具类，用于生成各种随机数据

// 获取栏目列表
const getColumnList = (params) => {
    return {
        code: 2000,
        data: [{
            name: "首页",
            isActive: true,
            link: '/'
          }, {
            name: "web前端",
            isActive: false,
            link: '/web'
          }, {
            name: "项目",
            isActive: false,
            link: '/project'
          }, {
            name: "日常",
            isActive: false,
            link: '/life'
          }, {
            name: "关于我",
            isActive: false,
            link: '/about'
          }]
    };
}

export {
    getColumnList
}