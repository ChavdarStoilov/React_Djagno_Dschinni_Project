import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as api from '../../../api/auth_api'
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignOutAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function AuthMenu({
    showUserModal,
    ShowShoppingModal
}) {
    const { user } = useContext(AuthContext);
    const { UserLogoutHendler } = useContext(AuthContext);

    const LogoutHandler = () => {

        api.Logout()
        .then((result) => {
            if (result.status ===200, 201) {
                UserLogoutHendler();
            }
        });

    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {user.email ? (
                        <Nav className="me-auto">
                            <Nav.Link>
                                <FontAwesomeIcon
                                    icon={faUser}
                                    onClick={showUserModal}
                                />
                            </Nav.Link>
                            <Nav.Link>
                                <FontAwesomeIcon
                                    icon={faShoppingCart}
                                    onClick={ShowShoppingModal}
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
                            <Nav.Link onClick={showUserModal}>
                                Login
                            </Nav.Link>
                            <Nav.Link onClick={showUserModal}>
                                Register
                            </Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
