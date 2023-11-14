import logo from "../assets/logo.webp";
import { useContext, useState } from "react";
import UserModal from "./UserModal";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ShoppingCartModal from "./ShoppingCartModal";
import { AuthContext } from "../contexts/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignOutAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import * as api from '../api/auth_api'

export default function Navigation() {
    const [showUserModal, setShowUserModal] = useState(false);
    const [showShoppingCartModal, setShoppingCartModal] = useState(false);
    const [Typemodal, setTypeModal] = useState();
    const { user } = useContext(AuthContext);
    const { UserLogoutHendler } = useContext(AuthContext);

    const handleCloseUserModal = () => setShowUserModal(false);
    const handleShowUserModal = (e) => {
        setTypeModal(e.target.textContent);
        setShowUserModal(true);
    };

    const handleCloseShoppingCartModal = () => setShoppingCartModal(false);
    const handleShowShoppingCartModal = () => setShoppingCartModal(true);

    const LogoutHandler = () => {

        api.Logout()
        .then((result) => {
            if (result.status ===200, 201) {
                UserLogoutHendler();
            }
        });

    };

    return (
        <>
            {showUserModal && (
                <UserModal
                    showUserModal={handleShowUserModal}
                    closeUerModal={handleCloseUserModal}
                    type={Typemodal}
                />
            )}

            {showShoppingCartModal && (
                <ShoppingCartModal
                    showCartModal={handleShowShoppingCartModal}
                    closeCartModal={handleCloseShoppingCartModal}
                />
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
                                        <Nav.Link as={Link} to="/">
                                            Home
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/products">
                                            Products
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/about">
                                            About
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/contact">
                                            Contact
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>

                        <Navbar expand="lg" className="bg-body-tertiary">
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    {user.email ? (
                                        <Nav className="me-auto">
                                            <Nav.Link>
                                                <FontAwesomeIcon
                                                    icon={faUser}
                                                    onClick={
                                                        handleShowUserModal
                                                    }
                                                />
                                            </Nav.Link>
                                            <Nav.Link>
                                                <FontAwesomeIcon
                                                    icon={faShoppingCart}
                                                    onClick={
                                                        handleShowShoppingCartModal
                                                    }
                                                />
                                            </Nav.Link>
                                            <Nav.Link>
                                                <FontAwesomeIcon
                                                    icon={faSignOutAlt}
                                                    onClick={LogoutHandler}
                                                />
                                            </Nav.Link>
                                        </Nav>
                                    ) : (
                                        <Nav className="me-auto">
                                            <Nav.Link
                                                onClick={handleShowUserModal}
                                            >
                                                Login
                                            </Nav.Link>
                                            <Nav.Link
                                                onClick={handleShowUserModal}
                                            >
                                                Register
                                            </Nav.Link>
                                        </Nav>
                                    )}
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </nav>
                </div>
            </div>
        </>
    );
}
