import {combineReducers} from 'redux';
function todolist (state = [], action) { // action 可以看到 mapDispatchToProp displatch里的内容 直接打印 action.type  ...
    // console.log(action);
    console.log(action.data)
    switch (action.type) {
    case 'add':
        return [...state, action.data];
        break;
    case 'updata':
        return [...state].map((item, index) => {
            if(item.data === action.data.data) {
                item.status = action.data.status;
            }
            return item;
        });
        break;
    case 'clear':
        return [...state].filter((item) => {
            if(item.status !== 'finish') {
                return item;
            }
        });
        break;
    case 'oneClear':
        return [...state].filter((item) => {
            if(item.data !== action.data) {
                return item;
            }
        });
        break;
    default: return [...state];
    }
};
function filter(state = 'all', action) {
    if(action.type === 'filter-name') {
        return action.text;
    } else {
        return state;
    }
}
export default combineReducers({
    todolist,
    filter
});
