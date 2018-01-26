import React, { Component } from 'react';
import Header from '../../../Test/header';
import '../../../Test/test.css';
import * as routers from 'react-router-dom';
let {BrowserRouter, Link, Route, Redirect, NavLink, Switch} = routers;
class Dialog extends Component {
    render () {
        return (
            <div id='root'>
                <Header>你感觉</Header>
                <div className='banner banner_fell'>
                    <img src='../src/restes/img/5.png' className='sex_img img_r'></img>
                    <Link to='/null'><img src='../src/restes/img/8.png' className='img2'></img></Link>
                </div>
                <div className='fell_cent'>
                    7yyuyiui
                </div>
            </div>
        );
    }
}

export default Dialog;
