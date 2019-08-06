import Mock from "mockjs";// 引入mockjs
import { array } from "prop-types";
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

const getArticleList = (params) => {
  let arr = [];
  for (let index = 0; index < 10; index++) {
    arr.push({
      "title": Random.ctitle(),
      "link": Random.url('http'),
      "date": Random.date(),
      "read": Random.integer(0, 100),
      "like": Random.integer(0, 100),
      "intro": Random.cparagraph(3, 7)
    });
  }
  return {
    code: 2000,
    data: arr
  };
}

// 获取推荐列表
const getHighestList = (params) => {
  let arr = [];
  for (let index = 0; index < 10; index++) {
    arr.push({
      "title": Random.ctitle(),
      "link": Random.url('http')
    });
  }
  return {
    code: 2000,
    data: arr
  };
}

export {
    getColumnList,
    getArticleList,
    getHighestList
}