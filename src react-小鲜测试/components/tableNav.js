import React, { Component } from 'react';
import {Pagination} from 'antd';
// 高阶组件 antd (蚂蚁金服组件); 抛出 （） => {  class Enhancer extends Component { ..... }    return Enhancer }
export default (Table) => {
    class Enhancer extends Component {
        constructor () {
            super();
            this.state = {
                start: 0,
                list: 10,
                page: 1,
                columns : [
                    {
                        title: 'Name',
                        dataIndex: 'name'
                    },
                    {
                        title: 'Age',
                        dataIndex: 'age'
                    },
                    {
                        title: 'Address',
                        dataIndex: 'address'
                    }
                ],
                data: [
                    {
                        'name': 'json',
                        'key': 0,
                        'age': 11,
                        'address': '北京市'
                    },
                    {
                        'name': 'kitty',
                        'key': 1,
                        'age': 32,
                        'address': '天津市'
                    },
                    {
                        'name': 'peter',
                        'key': 2,
                        'age': 21,
                        'address': '河北省'
                    },
                    {
                        'name': 'json',
                        'key': 3,
                        'age': 11,
                        'address': '北京市'
                    },
                    {
                        'name': 'kitty',
                        'key': 4,
                        'age': 32,
                        'address': '天津市'
                    },
                    {
                        'name': 'peter',
                        'key': 5,
                        'age': 21,
                        'address': '河北省'
                    },
                    {
                        'name': 'json',
                        'key': 6,
                        'age': 11,
                        'address': '北京市'
                    },
                    {
                        'name': 'kitty',
                        'key': 7,
                        'age': 32,
                        'address': '天津市'
                    },
                    {
                        'name': 'peter',
                        'key': 8,
                        'age': 21,
                        'address': '河北省'
                    },
                    {
                        'name': 'json',
                        'key': 9,
                        'age': 11,
                        'address': '北京市'
                    },
                    {
                        'name': 'kitty',
                        'key': 10,
                        'age': 32,
                        'address': '天津市'
                    },
                    {
                        'name': 'peter',
                        'key': 11,
                        'age': 21,
                        'address': '河北省'
                    },
                    {
                        'name': 'json',
                        'key': 12,
                        'age': 11,
                        'address': '北京市'
                    },
                    {
                        'name': 'kitty',
                        'key': 13,
                        'age': 32,
                        'address': '天津市'
                    },
                    {
                        'name': 'peter',
                        'key': 14,
                        'age': 21,
                        'address': '河北省'
                    },
                    {
                        'name': 'json',
                        'key': 15,
                        'age': 11,
                        'address': '北京市'
                    },
                    {
                        'name': 'kitty',
                        'key': 16,
                        'age': 32,
                        'address': '天津市'
                    },
                    {
                        'name': 'peter',
                        'key': 17,
                        'age': 21,
                        'address': '河北省'
                    },
                    {
                        'name': 'json',
                        'key': 18,
                        'age': 11,
                        'address': '北京市'
                    },
                    {
                        'name': 'kitty',
                        'key': 19,
                        'age': 32,
                        'address': '天津市'
                    },
                    {
                        'name': 'peter',
                        'key': 20,
                        'age': 21,
                        'address': '河北省'
                    },
                    {
                        'name': 'json',
                        'key': 21,
                        'age': 11,
                        'address': '北京市'
                    },
                    {
                        'name': 'kitty',
                        'key': 22,
                        'age': 32,
                        'address': '天津市'
                    },
                    {
                        'name': 'peter',
                        'key': 23,
                        'age': 21,
                        'address': '河北省'
                    }
                ]
            };
            this.change = this.change.bind(this);
        }
        change (page, pageSize) {
            console.log(page, pageSize);
            this.setState((state) => {
                state.start = (page - 1) * 10;
                state.list = page * 10;
                state.page = page;
            });
            console.log(this.state.start);
        }
        render () {
            let {columns, data} = this.state;
            return (
                <div>
                    <Table columns={columns} data = {data.slice(this.state.start, this.state.list)}/>
                    <Pagination defaultCurrent={this.state.page} total = {50} onChange={this.change}/>
                </div>
            );
        }
    }
    return Enhancer;
};
