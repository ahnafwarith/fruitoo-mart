import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='d-flex'>
            <Row className="g-4 m-2">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img className='w-50' variant="top" src="" />
                            <Card.Body>
                                <Card.Title>Difference between javascript and nodejs</Card.Title>
                                <Card.Text>
                                    JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node.js is a server-side scripting language based on the Google Chrome V8 engine.
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
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>When should you use nodejs and when should you use mongodb</Card.Title>
                                <Card.Text>
                                    Node.js is the language we are using right now to program mongoDB database. Node.js and mongoDB both can be used while building small to medium sized applications. When making applications that require single threads node.js is best. MongoDB shines when data is document-centric
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
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>What is the purpose of jwt and how does it work</Card.Title>
                                <Card.Text>
                                    JWT is used for security. JSON Web Token -JWT, is used to share security information between a client and a server. Server will create a unique token when client login, and stored to use for authorization.
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