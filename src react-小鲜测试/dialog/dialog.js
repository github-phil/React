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
    }
    render () {
        let isShow = this.state.flag;
        return (
            isShow &&
            <div id="dialog">
                <div className='minbox'>
                    <Title>
                        <span onClick={this.hide}>×</span>
                    </Title>
                    <Content>
                        <dl>
                            <dt><img src='../src/restes/img/2.png' className='btn_img1'></img></dt>
                            <dd>亲，我们为您准备了60道体质测试题，请耐心如实答题，获取获取正式体质结果</dd>
                        </dl>
                    </Content>
                    <Btn hide={this.certain}>
                        <img src='../src/restes/img/4.png' className='img2'></img>
                    </Btn>
                </div>
            </div>
        );
    }
}

export default Dialog;
