import React, {Component, Fragmet} from 'react';
import {Route} from 'react-router-dom';
export default function RouteWidthRoute (route) {
    console.log(route);
    return <Route path={route.path} render = {(props) => {
        return <route.component {...props} children={route.children} />
    }}></Route>
}
// 路由的遍历 数据 src Router router.config.js
// 父级遍历 引入组件 import RouteWithSubRoute from question.js
// 赋值给 <RouteWithSubRoute key={k} ...  children={内容}/> 遍历每个父组件有children 就会成功 没有会打印undfined

// 在有children 的情况下在当前页面 打印this.props.children 可以得到子路由 (src Router Querystion页面)
