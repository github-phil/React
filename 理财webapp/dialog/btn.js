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
        return <button onClick={this.colse}>{this.props.children}</button>;
    }
};
export default Title;
