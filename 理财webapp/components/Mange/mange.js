import React, { Component } from 'react';
import Content from '../../view/content';
import * as router from 'react-router-dom';
import tab1 from './tab1';
import tab2 from './tab2';
let {BrowserRouter, Link, Route, Redirect, Switch} = router;
class Mange extends Component {
    constructor () {
        super();
        this.state = {
            current: 0
        };
        this.styletab = this.styletab.bind(this);
    }
    styletab (k) {
        return k === this.state.current ? 'active' : '';
    }
    render () {
        let tab = [
            {name: '债权产品', to: '/mange/tab1'},
            {name: '优选基金', to: '/mange/tab2'}
        ];
        return (
            <div>
                <div id='tab'>
                    {tab.map((v, k) => {
                        return <Link to={v.to} key={k} onClick={() => { this.setState({current: k})}} className={this.styletab(k)}><span>{v.name}</span></Link>
                    })}
                </div>
                <Content ind={this.state.current}/>
                <Switch>
                    <Route path='/mange/tab1' component={tab1}></Route>
                    <Route path='/mange/tab2' component={tab2}></Route> 
                </Switch>
            </div>
        );
    }
};
export default Mange;
