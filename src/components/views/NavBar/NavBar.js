import {NavLink} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export function NavBar() {
    return(
        <Navbar bg="primary" variant="dark" expand="sm" className="mt-4 mb-4 rounded">
            <div className = 'container'>
                <Navbar.Brand href="/">Blog.app</Navbar.Brand>
                <Nav className="me-auto position-absolute end-0" >
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </Nav>
            </div>
        </Navbar>
    )
}