import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CaroFood() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="carouselFood">
            <Carousel activeIndex={index} 
            onSelect={handleSelect} 
            prevIcon={<span aria-hidden="true" className="carousel-control-prev" />} 
            nextIcon={<span aria-hidden="true" className="carousel-control-next" />}>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={require(`../../Images/0.jpeg`)}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>First slide label</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require(`../../Images/1.jpeg`)}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Second slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require(`../../Images/2.jpeg`)}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Third slide label</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require(`../../Images/3.jpeg`)}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Third slide label</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>

    )
}
export default CaroFood;