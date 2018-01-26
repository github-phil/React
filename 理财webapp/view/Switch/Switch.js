import React, { Component } from 'react';
import * as router from 'react-router-dom';
let {BrowserRouter, Link, Route, Redirect, NavLink} = router;
class More extends Component {
    render () {
        return (
            <div className='tab'>
                <section>
                </section>
                <footer>
                    <a href='main/ml'>rtrtr</a>
                    {/* <NavLink activeClassName='selected' to='/main/home'>
                        <i className='icon iconfont icon-shoucang'></i><br/>
                        首页
                    </NavLink>
                    <NavLink activeClassName='selected' to='/main/mange'>
                        <i className='icon iconfont icon-jewelry'></i><br/>理财产品
                    </NavLink>
                    <NavLink activeClassName='selected' to='/main/account'>
                        <i className='icon iconfont icon-account'></i><br/>我的账户
                    </NavLink>
                    <NavLink activeClassName='selected' to='/main/more'>
                        <i className='icon iconfont icon-all'></i><br/>更多
                    </NavLink> */}
                </footer>
            </div>
        )
    }
};
export default More;
