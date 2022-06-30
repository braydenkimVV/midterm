import React from 'react'
import { cardInfo } from "./CardInfo"
import { Card, Button, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Students = () => {
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {cardInfo.map((info) => {
                    return (
                        <Col>
                            <Card key={info.name}>
                                <Card.Img variant="top" src={info.image} style={{width: '20%', margin: 'auto'}}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>{info.name}</Card.Title>
                                    <Card.Text style={{textAlign: 'center'}}>{info.gpa}</Card.Text>
                                    <div class="col-md-16 text-center"> 
                                    <Button style={{textAlign: 'center'}}>Grade</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default Students
