import React, { Component } from 'react';
class Canvs extends Component {
    constructor () {
        super();
        this.init = this.init.bind(this);
    }
    componentDidMount () {
        this.init();
    }

    componentWillUpdate () {
        this.init();
    }
    componentWillUnmount () {
        this.init();
    }
    init () {
        let {data, number} = this.props;
        let ele = this.refs.my_canvas;
        var Bei = (data / number) * Math.PI * 2 - Math.PI / 2;
        var ctx = ele.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(25, 20);
        ctx.arc(25, 25, 25, -Math.PI / 2, Bei);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(25, 25, 20, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('抢购', 25, 25);
    }
    render () {
        return <canvas ref="my_canvas" width="50" height="50"></canvas>;
    }
}
export default Canvs;
