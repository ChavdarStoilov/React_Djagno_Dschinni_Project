import logo from "../assets/logo.webp";
import { useState } from "react";
import UserProfileModal from "./UserProfileModal";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navigation() {
    const [showUserModal, setShowUserModal] = useState(false);

    const handleClose = () => setShowUserModal(false);
    const handleShow = () => setShowUserModal(true);

    return (
        <>
            {showUserModal && (
                <UserProfileModal show={handleShow} close={handleClose} />
            )}

            <div className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-light bg-light justify-content-between">
                        <div>
                            <a className="logo" href="index.html">
                                <img src={logo} className="logo" />
                            </a>
                        </div>
                        <Navbar expand="lg" className="bg-body-tertiary">
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                                        <Nav.Link as={Link} to="/products">
                                            Products
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                                        <Nav.Link as={Link} to="/contact">
                                            Contact
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>

                        <div className="login_text">
                            <ul>
                                <li>
                                    <i
                                        className="fas fa-user-alt"
                                        onClick={handleShow}
                                    ></i>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-shopping-cart"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
