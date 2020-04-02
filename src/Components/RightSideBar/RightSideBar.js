import React from 'react';
import { Col } from 'react-bootstrap';

function RightSideBar() {
    return (
        <div className="rightSideBar">
          
          <div className="header" role="banner">
                    <h1 className="logo">
                        <a href="#">Ресторани <span>& Кафе - барови</span></a>
                    </h1>
                    <div className="nav-wrap">
                        <nav className="main-nav" role="navigation">
                            <ul className="unstyled list-hover-slide ">
                                <li><a className="btn btn-default" data-toggle="tooltip" data-placement="left" title="Клик за мени" href="#"><img  src={require(`../../Images/puze.jpeg`)}></img></a></li>
                                <li><a className="btn btn-default" data-toggle="tooltip" data-placement="left" title="Клик за мени" href="#"><img  src={require(`../../Images/tiamo.jpg`)}></img></a></li>
                                <li><a className="btn btn-default" data-toggle="tooltip" data-placement="left" title="Клик за мени" href="#"><img  src={require(`../../Images/lotos.jpg`)}></img></a></li>
                                <li><a className="btn btn-default" data-toggle="tooltip" data-placement="left" title="Клик за мени" href="#"><img  src={require(`../../Images/upstairs.jpg`)}></img></a></li>
                                <li><a className="btn btn-default" data-toggle="tooltip" data-placement="left" title="Клик за мени" href="#"><img  src={require(`../../Images/piano.jpg`)}></img></a></li>
                                <li><a className="btn btn-default" data-toggle="tooltip" data-placement="left" title="Клик за мени" href="#"><img  src={require(`../../Images/tiamo.jpg`)}></img></a></li>
                                <li><a className="btn btn-default" data-toggle="tooltip" data-placement="left" title="Клик за мени" href="#"><img  src={require(`../../Images/planb.jpg`)}></img></a></li>
                                <li><a className="btn btn-default" data-toggle="tooltip" data-placement="left" title="Клик за мени" href="#"><img  src={require(`../../Images/plaza.jpg`)}></img></a></li>
                                <li><a className="btn btn-default" data-toggle="tooltip" data-placement="left" title="Клик за мени" href="#"><img  src={require(`../../Images/feniks.png`)}></img></a></li>
                                
                            </ul>
                        </nav>
                    </div>
                </div>
           
        </div>
    )
}
export default RightSideBar;