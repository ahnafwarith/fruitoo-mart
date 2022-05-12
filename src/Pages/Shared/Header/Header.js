import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../../Images/fruito_logo.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect sticky='top' expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img height={40} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#inventory"><span className='link'></span></Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/inventory"><span className='link'>All Items</span></Nav.Link>
                                    <Nav.Link as={Link} to="/delete"><span className='link'>Delete Items</span></Nav.Link>
                                    <Nav.Link as={Link} to="/add"><span className='link'>Add Items</span></Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button onClick={handleSignOut} className='btn btn-warning me-2 pb-2'>Log Out</button>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        <span className='link'>Log in</span>
                                    </Nav.Link>
                            }
                            <Nav.Link as={Link} to="/blogs"><span className='link'>Blogs</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;