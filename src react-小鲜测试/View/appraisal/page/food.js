import React, { Component } from 'react';
import Header from '../../../Test/header';
import Banner from '../../../Test/bgImg';
import Content from '../../../Test/content';
import * as routers from 'react-router-dom';
import '../../../Test/test.css';
import Btn from '../../../Check/radiosgroup';
import {connect} from 'react-redux';
import mapStateToProps from '../Reducer/reducer';
import mapDispatchToProp from '../Reducer/actions';
let {BrowserRouter, Link, Route, Redirect, NavLink, Switch} = routers;
class Dialog extends Component {
    constructor () {
        super();
        this.state = {
            bg: ''
        };
        this.show = this.show.bind(this);
    }

    componentDidUpdate () {
        let ml = '';
        if (this.state.bg === 0) {
            ml = '无';
        } else {
            ml = '有';
        }
        this.props.updata_gender(ml);
        console.log(this.props);
    }
    show () {
        // this.props.updata_gender('女');
        // this.props.updata_gender(this.state.bg);
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
                    <Link to='/Message'><img src='../src/restes/img/6.png' className='img2'></img></Link>
                </Banner>
                <Content>
                    <h3>有无过敏食物</h3>
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

export default connect(mapStateToProps, mapDispatchToProp)(Dialog);
