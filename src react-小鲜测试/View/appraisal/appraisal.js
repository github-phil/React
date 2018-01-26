import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as routers from 'react-router-dom';
let {BrowserRouter, Link, Route, Redirect, NavLink, Switch} = routers;

class Home extends Component {
    render () {
        return (
            <div id='root'>
                <div className='header'>
                    <span><i className='icon iconfont icon-back'></i></span>
                    小鲜测评
                </div>
                <div className='banner'>
                    <img src='../src/restes/img/1.jpg' className='img1 img_re'></img>
                    <Link to='/sex'><img src='../src/restes/img/3.png' className='img3'></img></Link>
                </div>
            </div>
        );
    }
};
export default Home;
