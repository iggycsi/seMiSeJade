import React from 'react';
import { Col, Button } from 'react-bootstrap';

function BtnDelivery() {
    return (
        <div className="btnDelivery">
         
                <Col md={{ span: 6, offset: 3 }}>
                    <div className="mb-6">
                        <Button variant="outline-success" size="lg">
                        Food Delivery <i className="fas fa-car "></i>
                        </Button>{' '}
                        <Button variant="outline-warning" size="lg" >
                            Pick Up <i className="fas fa-map-signs"></i>
                        </Button>
                    </div>
                </Col>
           
        </div>
    )
}
export default BtnDelivery;