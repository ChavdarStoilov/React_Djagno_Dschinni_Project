import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as api from "../api/auth_api";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import SpinnerModal from "./Spinner";

export default function LoginModal({ close }) {
    const [validated, setValidated] = useState(false);
    const [errorServer, setErrorServer] = useState();
    const { UserLoginHendler } = useContext(AuthContext);
    const [IsLoading, setIsLoading] = useState(false);
    const [SuccessMsg, setSuccessMsg] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        const { username, password } = Object.fromEntries(
            new FormData(event.target)
        );

        setIsLoading(true);
        setErrorServer(false);

        api.login({ username, password })
            .then((result) => {
                if (result.status === 400) {
                    setErrorServer(result.data.non_field_errors);
                } else if (result.status === 200) {
                    UserLoginHendler(result.data);
                    close();
                }
            })
            .catch((error) => setErrorServer(error))
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            <Form onSubmit={onSubmit} className="login-form">
                {errorServer && <h2 className="error_msg">{errorServer}</h2>}
                {IsLoading ? (
                    <SpinnerModal msg="Logging..." />
                ) : (
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

                        <Form.Group as={Row} className="mb-3 login_footer">
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
                                Login
                            </Button>
                        </Form.Group>
                    </>
                )}
            </Form>
        </>
    );
}
