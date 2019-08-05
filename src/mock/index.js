import Mock from "mockjs";
import { logIn } from "./user";
import { getColumnList, getArticleList } from "./column";


// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
    timeout: 1000
});

//接口
Mock.mock('/login', 'post', logIn);
Mock.mock('/column_list', 'get', getColumnList);
Mock.mock(/\/article_list\?column\=[\s]*/, 'get', getArticleList);

export default Mock;