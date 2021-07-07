// 接收state和action，更新state
import {combineReducers} from 'redux';

import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
} from '../actions/actionTypes';

import { VisibilityFilters } from '../constants/default.js';

const { SHOW_ALL } = VisibilityFilters;
// 传入默认值
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

// 传入默认值
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

// store的结构
const appReducer = combineReducers({
    visibilityFilter,
    todos
});

export default appReducer;
