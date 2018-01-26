import React, { Component } from 'react';
import * as routers from 'react-router-dom';

let {BrowserRouter, Link, Route, Redirect, NavLink, Switch} = routers;
class Dialog extends Component {
    constructor () { // dialog  使用
        super();
        this.state = {
            num: false
        };
        this.toggle = this.toggle.bind(this)
    }

    toggle () {
        this.setState((state) => {
            state.num = !state.num;
            return state;
        });
    }
    render () {
        let {k, data} = this.props;
        let {num} = this.state;
        return <p onClick={this.toggle}>{num && <span id='square' className='bg' ind={k}></span>}<span id='square'></span>{data}</p>
    }
}

export default Dialog;
