import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from './view/Switch/Switch';
import Dialog from './dialog/dialog';
import '../src/restes/icon/iconfont.css';
import '../src/view/style.css';
import login from './view/Login/login';
import * as routers from 'react-router-dom';
let {BrowserRouter, Link, Route, Redirect, NavLink} = routers;
class App extends Component {
    constructor () { // dialog  使用
        super();
        this.Show = this.Show.bind(this);
        this.callback = this.callback.bind(this);
    }
    Show () {
        this.refs.dialog.show();
    }
    callback () {
        console.log(56576767);
    }
    render () {
        return (
            <BrowserRouter>
                <div className='tab'>
                    <Route path='/login' component={login}></Route>
                    <Route path='/main' render={() => <Switch/>}/>
                </div>
            </BrowserRouter>
            // <button>点击弹出</button>
        )
    }
}
export default App;
