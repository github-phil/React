import {createStore} from 'redux';
import renduers from './reducer';
let store = createStore(renduers);

store.subscribe(function () { //  快照
    console.log(store.getState());
});
export default store;
