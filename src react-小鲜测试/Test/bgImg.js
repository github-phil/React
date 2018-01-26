import React, { Component } from 'react';
class Dialog extends Component {
    render () {
        return (
            <div className='banner'>
                <img src='../src/restes/img/7.png' className='sex_img img_re'></img>
                {this.props.children}
            </div>
        );
    }
}

export default Dialog;
