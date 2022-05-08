import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect sticky='top' expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img height={40} src="" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services"><span className='link'>Services</span></Nav.Link>
                            <Nav.Link href="home#expert"><span className='link'>Expert</span></Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button onClick={handleSignOut} className='btn btn-success me-2 pb-2'>Signout</button>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        <span className='link'>Sign in</span>
                                    </Nav.Link>
                            }
                            {/* <Nav.Link as={Link} to="/login"><span className='link'>Sign in</span></Nav.Link> */}
                            <Nav.Link as={Link} to="/blogs"><span className='link'>Blogs</span></Nav.Link>
                            <Nav.Link as={Link} to="/about"><span className='link'>About me</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;