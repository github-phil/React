import React, { Component } from 'react';
import Dialog2 from './dialog';

class Dialog extends Component {
    constructor () {
        super();
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
        return (
            <div>
                <span onClick={this.Show}> <i className='icon iconfont icon-category'></i></span>
                <Dialog2 ref='dialog' callback={this.callback}/>
            </div>
        );
    }
}

export default Dialog;
