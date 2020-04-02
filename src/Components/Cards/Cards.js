import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import CardFood from './CardFood';

const Cards = (props) => {

    return (


        <Row className="justify-content-md-center">
            {props.games.length > 0 ? props.games.map(element => (
                <CardFood key={element.id} id={element.id} title={element.title} image={element.image} time={element.timeFrame} category={element.category} Games={props.games} />
            )) : <h1 className="notFound">Game not found</h1>}
        </Row>


    );
}


export default Cards;