import React from 'react';
import {Col } from 'react-bootstrap';

function LeftSideBar() {
    return (
        <div className="leftSideBar">
            
                <div className="header" role="banner">
                    <h1 className="logo">
                        <a href="#">Апни <span>& Пини си</span></a>
                    </h1>
                    <div className="nav-wrap">
                        <nav className="main-nav" role="navigation">
                            <ul className="unstyled list-hover-slide ">
                                <li><a href="#">Скара на жмара</a></li>
                                <li><a href="#">Пицички</a></li>
                                <li><a href="#">Пастрамајлии</a></li>
                                <li><a href="#">Тестенини</a></li>
                                <li><a href="#">Вегетаријанска храна</a></li>
                                <li><a href="#">Морска храна</a></li>
                                <li><a href="#">Донер</a></li>
                                <li><a href="#">Манџи</a></li>
                                <li><a href="#">Ајвар</a></li>
                                <li><a href="#">Предјадење</a></li>
                            </ul>
                        </nav>
                        <ul className="social-links list-inline unstyled list-hover-slide">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram+</a></li>
                            <li><a href="#">Google Map</a></li>
                            <li><a href="#">Linked In</a></li>
                        </ul>
                    </div>
                </div>
           
        </div>
    )
}
export default LeftSideBar;