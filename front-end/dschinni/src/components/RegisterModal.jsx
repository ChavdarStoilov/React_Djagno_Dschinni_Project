import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import * as api from "../api/auth_api"

export default function RegisterModal({ close }) {
    const onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = Object.fromEntries(
            new FormData(e.target)
        );
        

        api.login({username, email, password})
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
    };

    return (
        <>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor='username' >Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name='username' id="username" />
                    <Form.Text className="text-muted" >
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor='email'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' id="email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' id="password"  />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}
