import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actionTypes';

const addTodo = (text) => {
    return { type: ADD_TODO, text }
}

const toggleTodo = (text) => {
    return { type: TOGGLE_TODO, text }
}

const setVisibilityFilter = (filter) => {
    return { type: SET_VISIBILITY_FILTER, filter }
}

// action描述用户做了什么操作，触发reducer。
export {
    addTodo,
    toggleTodo,
    setVisibilityFilter
};