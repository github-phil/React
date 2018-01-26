import React, {Component, Fragment} from 'react'
import ReactDOM, {render} from 'react-dom'
import * as router from 'react-router-dom'
const {BrowserRouter, Route, Switch, Redirect} = router

// import { connect, Provider } from "react-redux"
// import store from '../store/store.js'

import RouteConfig from '../router/router.js'
import RouteWithSubRoute from '../router/subRouter.js'

class App extends Component{
  render () {
    const {routes} = RouteConfig
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            {routes.map((item, ind) => {
              return <RouteWithSubRoute key={ind} path={item.path} component={item.component} children={item.children}/>
            })}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App