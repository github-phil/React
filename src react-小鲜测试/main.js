import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './restes/style.css';
import './restes/icon/iconfont.css';
import Switch from './View/Switch/switch';
import Home from './View/Home/home';
import {Provider} from 'react-redux';
// import store from './Store/store';
import store from './components/Test2/Store/store';
ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>,
    document.querySelector('#root')
);
