import React, { Component } from 'react';
class Dialog extends Component {
    render () {
        let {columns, data} = this.props;
        return (
            <table style={{width: '100%'}}>
                <thead>
                    <tr>
                        {columns.map((item, index) => {
                            return <td key={index}>{item.title}</td>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                            <td>{item.key}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        );
    }
}

export default Dialog;
