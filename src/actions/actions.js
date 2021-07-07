// 描述发生了什么
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actionTypes';

// 创建action函数，只是简单返回一个action
const addTodo = (text) => {
    return {
        type: ADD_TODO,
        // 以下字段自定义
        text
    }
}

const toggleTodo = (index) => {
    return { type: TOGGLE_TODO, index }
}

const setVisibilityFilter = (filter) => {
    return { type: SET_VISIBILITY_FILTER, filter }
}

export {
    addTodo,
    toggleTodo,
    setVisibilityFilter
};