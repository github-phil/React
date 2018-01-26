import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as routers from 'react-router-dom';
import Food from '../appraisal/page/food.js';
import Appraisal from '../appraisal/appraisal';
import Sex from '../appraisal/page/sex';
import medical from '../appraisal/page/medical';
import Message from '../appraisal/page/message';
import Fell from '../appraisal/page/fell';
import Null from '../appraisal/page/null';
import component from '../../components/component';
import routeconfig from '../../Router/router.config';
import RouteWithSubRoute from '../../Router/question';
import Routes from './homerouter';
import 'antd/dist/antd.css';
import Text2 from '../../components/Test2/text';
let {BrowserRouter, Link, Route, Redirect, NavLink, Switch} = routers;

class Home extends Component {
    render () {
        let {routes} = routeconfig;
        return (
            <BrowserRouter>
                <div id='home'>
                    {/* 路由的渲染 */}
                    {/* <Route exact path='/' render={() => <Redirect to='/Querystion' />}></Route>
                    {routes.map((routers, k) => {
                        return <RouteWithSubRoute key={k} path={routers.path} component={routers.component} children={routers.children}/>
                    })} */}
                    <section>
                        <Route exact path='/' render={() => <Redirect to='/Text2' />}></Route>
                        <Route path='/Text2' component={Text2}></Route>
                        {/* <Route path='/sex' component={Sex}></Route>
                        <Route path='/Message' component={Message}></Route>
                        <Route path='/Mild' component={medical}></Route>
                        <Route path='/Food' component={Food}></Route>
                        <Route path='/Fell' component={Fell}></Route>
                        <Route path='/Appraisal' component={Appraisal}></Route>
                        <Route path='/null' component={Null}></Route>
                        <Route path='/component' component={component}></Route> */}
                       
                    </section>
                </div>
            </BrowserRouter>
        );
    }
};
export default Home;
