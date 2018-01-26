import React, { Component } from 'react';
import {connect} from 'react-redux'; // 连接 redux
import './style.css';
class Dialog extends Component {
    constructor () {
        super();
        this.state = {
            value: '',
            filter_name: 'all'
        };
        this.add = this.add.bind(this);
        this.onInput = this.onInput.bind(this);
        this.btnchecked = this.btnchecked.bind(this);
    }
    componentDidMount () {
        console.log(this.props);
    }
    add (e) { // 按enter键 调用add 添加数据
        if (e.keyCode !== 13) return;
        this.props.add(this.state.value);
        this.setState({value: ''});
    }
    onInput (e) { // 设置input value变化的值
        this.setState({
            value: e.target.value
        });
    }
    btnchecked (item) { // 选中将状态值pending 变为finish
        this.props.updata({
            data: item.data,
            status: item.status === 'pending' ? 'finish' : 'pending'
        });
    }
    render () {
        let {value, filter_name} = this.state;
        let {todolist, filter, Clear, length, oneClear} = this.props;
        return (
            <div>
                <p><input value={value} onInput = {this.onInput} type='text' onKeyDown={this.add}></input></p>
                <ul>
                    {
                        todolist.map((item, k) => {
                            return <li key={k}>
                                <span id='radio_li' onClick={() => this.btnchecked(item)} className={item.status === 'finish' ? 'checked' : ''}></span><span>{item.data}</span>
                                <b onClick={() => {oneClear(item.data)}}>×</b>
                            </li>
                        })
                    }
                </ul>
                <p>
                    <span>{length}项未完成</span>
                    <button onClick={() => { filter('all'); this.setState({filter_name: 'all'})}} className={filter_name === 'all' ? 'bg' : ''}>全部</button>
                    <button onClick={() => { filter('pending'); this.setState({filter_name: 'pending'})}} className={filter_name === 'pending' ? 'bg' : ''}>正在做</button>
                    <button onClick={() => { filter('finish'); this.setState({filter_name: 'finish'})}} className={filter_name === 'finish' ? 'bg' : ''}>已完成</button>
                    <button onClick={Clear}>清除已完成</button>
                </p>
            </div>
        );
    }
}
function filter_list(todolist, filter) {
    if(filter === 'all') return todolist;
    let arr = [];
    todolist.forEach(item => {
        if(item.status === filter) {
            arr.push(item);
        }
    });
    return arr;
}
function get_pending(todolist) {
    let len = 0;
    todolist.forEach(item => {
        if (item.status === 'pending') ++len;
    });
    return len;
}
function mapStateToProps (state) { // 监听实时发生改变 state 调用使用的是 redcer.js抛出的函数
    return { // 必须有
        // todolist: state.todolist
        todolist: filter_list(state.todolist, state.filter),
        length: get_pending(state.todolist)
    };
}
function mapDispatchToProp (dispatch) {
    // 所定义的方法名作为属性名，合并到组件props中 dispatch改变 会反映到reducer.js中 console.log(action) 
    // 在以上页面中打印 this.props 会得到 mapDispatchToProp里所定义的内容
    return {
        add: function (data) {
            dispatch({
                type: 'add',
                data: {
                    data: data,
                    status: 'pending'
                }
            });
        },
        updata: function (obj) {
            dispatch({
                type: 'updata',
                data: obj
            });
        },
        filter (type) {
            dispatch({
                type: 'filter-name',
                text: type
            });
        },
        Clear () {
            dispatch({
                type: 'clear'
            });
        },
        oneClear (data) {
            dispatch({
                type: 'oneClear',
                data: data
            });
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProp)(Dialog);
