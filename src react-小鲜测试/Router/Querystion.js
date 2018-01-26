import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as routers from 'react-router-dom';
import RouteWithSubRoute from './question';
let {BrowserRouter, Link, Route, Redirect, NavLink, Switch} = routers;

class Home extends Component {
    render () {
        // console.log(this.props.children)
        let {children} = this.props;
        return (
            <div id='root'>
               query query query query query query query query
                {children.map((item, ind) => {
                    return <RouteWithSubRoute key={ind} path={item.path} component={item.component}/>
                })}
            </div>
        );
    }
};
export default Home;
