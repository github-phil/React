import React, { Component } from 'react';
class Title extends Component {
    constructor () {
        super();
        this.colse = this.colse.bind(this);
    }
    colse () {
        this.props.hide();
    }
    render () {
        return <div>{this.props.children}</div>;
    }
};
export default Title;
