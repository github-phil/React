import React, { Component } from 'react';
import Table from './table';
import TableWraper from './tableNav';
let TableWithNav = TableWraper(Table);
class Dialog extends Component {
    render () {
        return (
            <TableWithNav/>
        );
    }
}

export default Dialog;
