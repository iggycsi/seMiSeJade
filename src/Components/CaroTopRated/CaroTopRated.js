import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function CaroTopRated() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="caroTopRated">
            <Carousel activeIndex={index}  onSelect={handleSelect}>
                <Carousel.Item >
                    <img
                        className="w-10"
                        src={require(`../../Images/0.jpg`)}
                        alt="First slide"
                    />
                    <img
                        className="w-10"
                        src={require(`../../Images/1.jpg`)}
                        alt="First slide"
                    />
                    <img
                        className="w-10"
                        src={require(`../../Images/2.jpg`)}
                        alt="First slide"
                    />
                 
                    <Carousel.Caption>
                        <h1>First Top Rated</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                        className="w-10"
                        src={require(`../../Images/5.jpg`)}
                        alt="First slide"
                    />
                    <img
                        className="w-10"
                        src={require(`../../Images/6.jpg`)}
                        alt="First slide"
                    />
                    <img
                        className="w-10"
                        src={require(`../../Images/7.jpg`)}
                        alt="First slide"
                    />
                 

                    <Carousel.Caption>
                        <h1>Second Top Rated</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                        className="w-10"
                        src={require(`../../Images/10.jpg`)}
                        alt="First slide"
                    />
                    <img
                        className="w-10"
                        src={require(`../../Images/11.jpg`)}
                        alt="First slide"
                    />
                    <img
                        className="w-10"
                        src={require(`../../Images/12.jpg`)}
                        alt="First slide"
                    />
                   

                    <Carousel.Caption>
                        <h1>Third Top Rated</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                        className="w-10"
                        src={require(`../../Images/14.jpg`)}
                        alt="First slide"
                    />
                    <img
                        className="w-10"
                        src={require(`../../Images/15.jpg`)}
                        alt="First slide"
                    />
                    <img
                        className="w-10"
                        src={require(`../../Images/16.jpg`)}
                        alt="First slide"
                    />
                   

                    <Carousel.Caption>
                        <h1>Fourth Top Rated</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>

    )
}
export default CaroTopRated;