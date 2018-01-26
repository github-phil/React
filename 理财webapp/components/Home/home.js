import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';
import './home.css';
import logo from '../../restes/img/banner1.png';
import logo2 from '../../restes/img/banner_activite.jpg';
import logo3 from '../../restes/img/gaodian.png';
class Home extends Component {
    componentDidMount () {
        new Swiper (this.refs.banner, {
            loop: true,
            effect: 'fade',
            autoplay: {
                delay: 1000
            }
        });
    }
    render () {
        return (
            <div>
                <div ref='banner' className='banner'>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src={logo}></img></div>
                        <div className="swiper-slide"><img src={logo2}></img></div>
                        <div className="swiper-slide"><img src={logo3}></img></div>
                    </div>
                    {/* <div className='swiper-button-prev buton'></div>
                    <div className='swiper-button-next buton'></div> */}
                </div>
            </div>
        );
    }
};
export default Home;
