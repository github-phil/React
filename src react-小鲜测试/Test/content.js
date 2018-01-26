import React, { Component } from 'react';

class Dialog extends Component {
    render () {
        return (
            <div className='sex_cent'>
                {this.props.children}
            </div>
        );
    }
}

export default Dialog;
