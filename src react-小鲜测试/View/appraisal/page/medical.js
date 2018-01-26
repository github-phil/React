import React, { Component } from 'react';
import Header from '../../../Test/header';
import Banner from '../../../Test/bgImg';
import Content from '../../../Test/content';
import '../../../Test/test.css';
import Btn from '../../../Check/radiosgroup';
import * as routers from 'react-router-dom';
let {BrowserRouter, Link, Route, Redirect, NavLink, Switch} = routers;
class Dialog extends Component {
    constructor () {
        super();
        this.state = {
            bg: ''
        };
    }
    render () {
        let li = [
            {
                have: '无'
            },
            {
                have: '有'
            }
        ];
        return (
            <div id='root'>
                <Header>基本信息</Header>
                <Banner>
                    <Link to='/Food'><img src='../src/restes/img/6.png' className='img2'></img></Link>
                </Banner>
                <Content>
                    <h3>有无病史</h3>
                    <div className='sex_sex'>
                        <div className='medicalhistory'>
                            {
                                li.map((item, k) => {
                                    return <p onClick={() => { this.setState({bg: k})}} key={k}><Btn k={k} index={this.state.bg} id='radio'></Btn>{item.have}</p>
                                })
                            }
                        </div>
                    </div>
                </Content>
            </div>
        );
    }
}

export default Dialog;
