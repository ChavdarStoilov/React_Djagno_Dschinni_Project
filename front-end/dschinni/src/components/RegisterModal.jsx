import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as api from "../api/auth_api";

export default function RegisterModal({ close }) {
    const [validated, setValidated] = useState(false);
    const [errorServer, setErrorServer] = useState();

    const onSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        const { username, email, password } = Object.fromEntries(
            new FormData(event.target)
        );

        api.login({ username, email, password })
            .then((status, data) => {
                console.log(status, data);
                if (status === 400) {
                    setErrorServer(data);
                } else if (status === 200) {
                    setValidated(true);
                    close();
                }
            })
            .catch((error) => setErrorServer(error));
        
            console.log(errorServer);
    };

    return (
        <>
            <Form onSubmit={onSubmit} className="register-from">
                {errorServer}

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="username">Username</Form.Label>
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
                    <Form.Label htmlFor="email">Email address</Form.Label>
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
                    <Form.Label htmlFor="password">Password</Form.Label>
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
            </Form>
        </>
    );
}
