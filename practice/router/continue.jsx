import React, {Component} from 'react'
import * as router from 'react-router-dom'
const {Route, Switch, Redirect, Link} = router

import Header from '../../components/header.jsx'
import './continue/continue.css'
import RouteWithSubRoute from '../../router/subRouter.js'

class Continue extends Component{
  render () {
    const {children} = this.props
    return (
      <div className='content'>
        <Header>
          <h1>基本信息</h1>
        </Header>
        <section>
          <div className='bg-img'>
            <Switch>
              {children.map((item, ind) => {
                return <RouteWithSubRoute key={ind} path={item.path} component={item.component}/>
              })}
            </Switch>
          </div>
        </section>
      </div>
    )
  }
}
export default Continue