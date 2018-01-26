import React, { Component } from 'react';
class Dialog extends Component {
    render () {
        return (
            <div className='header'>
                <span><i className='icon iconfont icon-back'></i></span>
                {this.props.children}
            </div>
        );
    }
}

export default Dialog;
