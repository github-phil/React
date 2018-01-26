import React, { Component } from 'react';
import * as routers from 'react-router-dom';
import Btn from './radiosgroup';
let {BrowserRouter, Link, Route, Redirect, NavLink, Switch} = routers;
class Dialog extends Component {
    constructor () { // dialog  使用
        super();
        this.state = {
            bg: 0
        };
        this.bg = this.bg.bind(this);
    }
    bg (k) {
        return k === this.state.ind ? 'bg' : '';
    }
    render () {
        let {k} = this.props;
        console.log(k)
        return (
            <span onClick={() => { this.setState({bg: k})}}><Btn k={k} index={this.state.bg} id='radio'></Btn></span>
        );
    }
}

export default Dialog;
