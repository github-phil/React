import React, { Component } from 'react';
import './dialog.css';
import Title from './title';
import Btn from './btn';
import Content from './content';
class Dialog extends Component {
    constructor () {
        super();
        this.state = {
            flag: false
        };
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.certain = this.certain.bind(this);
    }
    show () {
        this.setState(state => {
            state.flag = true;
            return state;
        });
    }
    hide () {
        this.setState(state => {
            state.flag = false;
            return state;
        });
    }
    certain () {
        this.hide();
        this.props.callback();
    }
    render () {
        let isShow = this.state.flag;
        return (
            isShow &&
            <div id="dialog">
                <div className='minbox'>
                    <Title>
                        你好欢迎来到本页面
                        <span onClick={this.hide}>×</span>
                    </Title>
                    <Content>
                        <ul>
                            <li>trtytr</li>
                            <li>trtytr</li>
                            <li>trtytr</li>
                        </ul>
                    </Content>
                    <Btn hide={this.certain}>确认</Btn>
                    <Btn hide={this.hide}>取消</Btn>
                </div>
            </div>
        );
    }
}

export default Dialog;
