import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as routers from 'react-router-dom';
import Dialog from '../../../dialog/dialog';
import Header from '../../../Test/header';
import Banner from '../../../Test/bgImg';
import Content from '../../../Test/content';
import '../../../Test/test.css';
import Btn from '../../../Check/radiosgroup';
let {BrowserRouter, Link, Route, Redirect, NavLink, Switch} = routers;

class Home extends Component {
    constructor () { // dialog  使用
        super();
        this.state = {
            bg: 0
        };
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
        let data = [
            {
                dl: '男',
                dt: '我是男神',
                id: 0
            },
            {
                dl: '女',
                dt: '我是女神',
                id: 1
            }
        ];
        return (
            <div id='root'>
                <Header>基本信息</Header>
                <Banner>
                    <Link to='/Mild'><img src='../src/restes/img/6.png' className='img2' ></img></Link>
                </Banner>
                <Content>
                    <h3>请选择您的性别</h3>
                    <div className='sex_sex _Sex'>
                        {
                            data.map((item, k) => {
                                return <dl key={k}>
                                    <dt>{item.dl}</dt>
                                    <dd>{item.dt}</dd>
                                    <dd>
                                        <span onClick={() => { this.setState({bg: k})}}><Btn k={k} index={this.state.bg} id='radio'></Btn></span>
                                    </dd>
                                </dl>
                            })
                        }
                    </div>
                </Content>
                {/* <Dialog ref='dialog'></Dialog> */}
            </div>
        );
    }
};
export default Home;
