import {combineReducers} from 'redux';
function count (state = 0, actions) {
    if (actions.type === 'updata_gender') {
        state = actions.data;
    }
    return state;
};
function count2 (state = 0, actions) {
    return state;
};
let reducer = combineReducers({
    count,
    count2
});
export default reducer;
