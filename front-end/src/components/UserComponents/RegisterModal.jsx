import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SpinnerModal from "../UtilsComponents/Spinner";
import * as api from "../../api/auth_api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function RegisterModal({ close }) {
    const [errorServer, setErrorServer] = useState(false);
    const [IsLoading, setIsLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        const { username, email, password } = Object.fromEntries(
            new FormData(event.target)
        );

        setErrorServer(false)
        setIsLoading(true);
        
        api.register({ username, email, password })
            .then((result) => {
                if (result.status === 400) {
                    setErrorServer(
                        Object.values(result.data).map((key) => key)
                    );
                } else if (result.status === 201) {
                    setSuccessMsg(
                    <div className="success-msg-checkout">
                        <FontAwesomeIcon icon={faCheckCircle} className="success_msg" />
                        <h1 className="success_msg-reg">Your registration was successfully!</h1>
                    </div>)
                }
            })
            .catch((error) => setErrorServer(error))
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            <Form onSubmit={onSubmit} className="register-from">
                <h1 className="form-custom-color user-modal-title">Register</h1>
                <FontAwesomeIcon icon={faTimes} onClick={close} className="user-modal-title-close"/>
                
                {errorServer && 
                    <ul>
                        {errorServer.map((error) => (
                            <li>
                                <h3 className="error_msg">{error}</h3>
                            </li>
                        ))}
                    </ul>
                }
                
                {IsLoading ? (
                    <SpinnerModal cname="register-loading" />
                ) : !successMsg ? (
                    <>
                        <Form.Group className="mb-3">
                            <Form.Label
                                htmlFor="username"
                                className="form-custom-color"
                            >
                                Username
                            </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter username"
                                name="username"
                                id="username"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide username.
                            </Form.Control.Feedback>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label
                                htmlFor="email"
                                className="form-custom-color"
                            >
                                Email address
                            </Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                id="email"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide email.
                            </Form.Control.Feedback>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label
                                htmlFor="password"
                                className="form-custom-color"
                            >
                                Password
                            </Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                name="password"
                                id="password"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide passwod.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 register_footer">
                            <Button
                                className="close-btn"
                                variant="primary"
                                type="button"
                                onClick={close}
                            >
                                Close
                            </Button>
                            <Button
                                className="register-btn"
                                variant="primary"
                                type="submit"
                            >
                                Register
                            </Button>
                        </Form.Group>
                    </>
                ) : successMsg}
            </Form>
        </>
    );
}
