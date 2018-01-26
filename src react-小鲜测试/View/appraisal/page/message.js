import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as routers from 'react-router-dom';
import Header from '../../../Test/header';
import Banner from '../../../Test/bgImg';
import Content from '../../../Test/content';
import '../../../Test/test.css';
import Btn from '../../../Check/checkbox';
let {BrowserRouter, Link, Route, Redirect, NavLink, Switch} = routers;

class Home extends Component {
    constructor () {
        super();
        this.state = {
            bg: ''
        };
    };
    componentDidUpdate () {
        console.log(this.state.bg);
    }
    render () {
        let list = [
            {
                name: '羊肉'
            },
            {
                name: '西瓜'
            },
            {
                name: '海鲜'
            },
            {
                name: '洋葱'
            },
            {
                name: '萝卜'
            },
            {
                name: '萝卜'
            },
            {
                name: '香菜'
            },
            {
                name: '韭菜'
            }
        ];
        return (
            <div id='root'>
                <Header>基本信息</Header>
                <Banner>
                    <Link to='/Fell'><img src='../src/restes/img/6.png' className='img2'></img></Link>
                </Banner>
                <Content>
                    <h3>不喜欢吃的食物</h3>
                    {/* <span className='square'></span> */}
                    <div className='message_square'>
                        {
                            list.map((item, k) => {
                                return <Btn id="square" key={k} data={item.name}/>
                            })
                        }
                    </div>
                </Content>
            </div>
        );
    }
};
export default Home;
{/* <p key={k} onClick={() => { this.setState({bg: k})}}><Btn id='square' k={k} index={this.state.bg}></Btn>{item.name}</p> */}