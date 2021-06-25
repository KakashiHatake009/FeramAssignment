import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Form, FormControl, Button, NavDropdown, Nav } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import logo from './images/logo.JPG'
export class NavBar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>

                <Navbar bg="dark" variant="dark">
                    <img
                        alt=""
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top align-center"
                    />
                    <Navbar.Brand href="#home">Feram Assignment!!</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </Navbar>
            </div >
        )
    }
}

export default NavBar
