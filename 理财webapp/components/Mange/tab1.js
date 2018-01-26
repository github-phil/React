import React, { Component } from 'react';
import Canvas from '../../view/canvs';
class Content extends Component {
    render () {
        let stylered = {
            'color': 'red'
        };
        let contlist =
                [
                    {
                        name: '国投瑞银美丽中国混合',
                        mix: '（000662）混合型',
                        strong: '34',
                        sum: '.48%',
                        summ: '2.0320',
                        number: '203',
                        genis: '季涨幅',
                        unit: '单位净值'
                    },
                    {
                        name: '富过高新技术产业混合',
                        mix: '（100060）混合型',
                        strong: '22',
                        sum: '.64%',
                        summ: '2.5520',
                        number: '223',
                        genis: '季涨幅',
                        unit: '单位净值'
                    },
                    {
                        name: '国金通用国鑫发起',
                        mix: '（762001）混合型',
                        strong: '21',
                        sum: '.61%',
                        summ: '1.6577',
                        number: '159',
                        genis: '季涨幅',
                        unit: '单位净值'
                    }
                ]
        return (
            <div className="cont">
                {
                    contlist.map((v, k) => {
                        return <div className='dl' key={k}>
                            <p><b className='margrigt'>{v.name}</b>{v.mix}</p>
                            <div className='dl2'>
                                <div id='one'>
                                    <h1 className='h1'>{v.strong}</h1>
                                    <dl>
                                        <dt>{v.genis}</dt>
                                        <dd className='h1'><b>{v.sum}</b></dd>
                                    </dl>
                                </div>
                                <dl className='Margin'>
                                    <dt>{v.unit}</dt>
                                    <dd><b>{v.summ}</b></dd>
                                </dl>
                                <dl>
                                    {/* <dt className='cirle'>已购</dt> */}
                                    <dt ref='canvs'>{<Canvas data={v.strong} number={100}></Canvas>}</dt>
                                    <dd>已有<span style={stylered}>{v.number}</span>人购买</dd>
                                </dl>
                            </div>
                        </div>;
                    })
                }
            </div>
        );
    }
};
export default Content;
