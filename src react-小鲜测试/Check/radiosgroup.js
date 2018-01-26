import React, { Component } from 'react';
import * as routers from 'react-router-dom';
let {BrowserRouter, Link, Route, Redirect, NavLink, Switch} = routers;
class Dialog extends Component {
    constructor () { // dialog  使用
        super();
        this.bg = this.bg.bind(this);
    }

    bg (k) {
        return k === this.props.index ? 'bg' : '';
    }
    render () {
        let {k, index, id} = this.props;
        return (
            <span id={id} className={this.bg(k)}></span>
        );
    }
}

export default Dialog;
