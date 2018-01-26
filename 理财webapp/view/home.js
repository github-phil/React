import React, { Component } from 'react';
import * as router from 'react-router-dom';
import Home from '../components/Home/home';
import Mange from '../components/Mange/mange';
import Account from '../components/Account/account';
import More from '../components/More/more';
import fetch from 'isomorphic-fetch';
let {BrowserRouter, Link, Route, Redirect, NavLink} = router;
class Cont extends Component {
    constructor () {
        super();
        this.state = {
            ind: 0,
            url: '/main'
        };
        this.btnbg = this.btnbg.bind(this);
    }
    btnbg (index) {
        return index === this.state.ind ? 'active' : '';
    }
    url () {
        let Dates = new Date();
        Dates.setDate(this.state.day);
        let dateTime = Dates.toLocaleDateString().split('/').join('-');
        let url = 'rexxar/api2/recommend_feed?alt=json&next_date' + dateTime;
        console.log(dateTime);
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.onload = function () {
            console.log(xhr.response);
        };
        xhr.onerror = function () {
            console.log('Oops, error');
        };
        xhr.send();
    }
    // componentWillMount () {
    //     if (this.props.match.path === '/min') {
    //         this.setState({url: '/min'});
    //     }
    //     this.url();
    // }
    render () {
        let footerlist = [
            {icon: 'icon iconfont icon-shoucang', name: '首页', to: '/home'},
            {icon: 'icon iconfont icon-jewelry', name: '理财产品', to: '/mange'},
            {icon: 'icon iconfont icon-account', name: '我的账户', to: '/account'},
            {icon: 'icon iconfont icon-all', name: '更多', to: '/more'}
        ];
        return (
            <div className="tab">
                <header>
                    <p><span></span><b>理财产品</b><span><i className='icon iconfont icon-category'></i></span></p>
                </header>
                <section>
                    <Route path={ this.state.url + '/home'} component={Home}></Route>
                    <Route path={ this.state.url + '/mange'} component={Mange}></Route>
                    <Route path={ this.state.url + '/account'} component={Account}></Route>
                    <Route path={ this.state.url + '/more'} component={More}></Route>
                </section>
                <footer>
                    {footerlist.map((item, i) => {
                        return (
                            <Link to={this.state.url + item.to} key={i} onClick={() => { this.setState({ind: i})}} className={this.btnbg(i)}><i className={item.icon}></i>
                                <br></br>{item.name}
                            </Link>
                        )
                    })}
                </footer>
            </div>
        );
    }
};
export default Cont;
