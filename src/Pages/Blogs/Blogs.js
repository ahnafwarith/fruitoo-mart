import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import services from '../../Images/services.png'
import firebasepic from '../../Images/firebase.png'

const Blogs = () => {
    return (
        <div className='d-flex'>
            <Row className="g-4 m-2">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img className='w-50' variant="top" src={firebasepic} />
                            <Card.Body>
                                <Card.Title>Difference between javascript and nodejs</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti! Adipisci, iure? Tempora sint repellendus quia, eos consequuntur incidunt unde porro repellat voluptate quisquam sapiente aliquam nobis ratione. Optio, illum!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className="g-4 m-2">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={services} />
                            <Card.Body>
                                <Card.Title>When should you use nodejs and when should you use mongodb</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid maiores harum aperiam doloribus eaque error quas est? Provident expedita excepturi eos veniam, error et nisi amet, veritatis perspiciatis velit eaque?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className="g-4 m-2">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={services} />
                            <Card.Body>
                                <Card.Title>What is the purpose of jwt and how does it work</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid maiores harum aperiam doloribus eaque error quas est? Provident expedita excepturi eos veniam, error et nisi amet, veritatis perspiciatis velit eaque?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Blogs;