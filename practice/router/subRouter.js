import React, {Component} from 'react'
import {Route} from 'react-router-dom'
export default function RouteWithSubRoute(route) {
  return <Route path={route.path} render={(props) => {
    return <route.component {...props} children={route.children} />
  }}>
  </Route>
}
