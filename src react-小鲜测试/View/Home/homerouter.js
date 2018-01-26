import React, {Component, Fragment} from 'react';
import * as router from 'react-router-dom';
import RouteConfig from '../../Router/question';
import RouteWithSubRoute from '../../Router/router.config';
const {BrowserRouter, Route, Switch, Redirect} = router;
class App extends Component {
    render () {
        const {children} = this.props;
        return (
            <div className='App'>
                <Switch>
                    {children.map((item, ind) => {
                        return <RouteWithSubRoute key={ind} path={item.path} component={item.component}/>
                    })}
                </Switch>
            </div>
        );
    }
}
export default App;
