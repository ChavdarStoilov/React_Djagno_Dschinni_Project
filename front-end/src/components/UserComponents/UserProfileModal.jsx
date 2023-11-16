import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState, useEffect } from "react";
import * as api from "../../api/auth_api";
import SpinnerModal from "../UtilsComponents/Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function UserProfileModal({ close }) {
    const { user } = useContext(AuthContext);
    const [UserProfileData, setUserProfileData] = useState({});
    const [IsLoading, setIsLoading] = useState(false);
    const [SuccessMsg, setSuccessMsg] = useState(true);
    const [ErrorMsg, setErrorMsg] = useState([]);

    useEffect(() => {
        setSuccessMsg(false);
        setIsLoading(true);
        api.GetProfileInfo(user.user_id, user.token)
            .then((profile) => {
                if (profile.status === 200) {
                    setUserProfileData(profile.data[0]);
                    setIsLoading(false);
                }
            })
            .catch((err) => console.error(err));
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();
        
        setErrorMsg(false)
        
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        const { username, first_name, last_name, email } = Object.fromEntries(
            new FormData(event.target)
        );
        
        const data = {username, first_name, last_name, email}
        api.UpdateProfileInfo(user.user_id, data, user.token)
        .then((result) => {
            if (result.status === 200) {
                setSuccessMsg(true);
            }
            else {
                setErrorMsg(Object.values(result.data).map((key) => key));
            }
        })
        .catch(err => console.log(err))
    };

    return (
        <>
            {IsLoading ? (
                <SpinnerModal />
            ) : (
                <Form onSubmit={onSubmit} className="login-form">
                    <h1 className="form-custom-color user-modal-title">Profile</h1>
                    <FontAwesomeIcon icon={faTimes} onClick={close} className="user-modal-title-close"/>

                    {SuccessMsg && <h2 className="success_msg">The update has been successfully!</h2>}
                    {ErrorMsg && (
                    <ul>
                        {ErrorMsg.map(error => (<li><h3 className="error_msg">{error}</h3></li>))}
                    </ul>
                    )}
                    <FormGroup>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="username" className="form-custom-color">Username</Form.Label>
                            <Form.Control
                                readOnly
                                type="text"
                                defaultValue={UserProfileData.username}
                                name="username"
                                id="username"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="first_name" className="form-custom-color">
                                First Name
                            </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                defaultValue={UserProfileData.first_name}
                                name="first_name"
                                id="first_name"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide First Name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="last_name" className="form-custom-color">
                                Last Name
                            </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                defaultValue={UserProfileData.last_name}
                                name="last_name"
                                id="last_name"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide Last Name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="email" className="form-custom-color">Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                defaultValue={UserProfileData.email}
                                name="email"
                                id="email"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide Email.
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
                                Save
                            </Button>
                        </Form.Group>
                    </FormGroup>
                </Form>
            )}
        </>
    );
}
