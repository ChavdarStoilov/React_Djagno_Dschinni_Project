import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState, useEffect } from "react";
import * as api from "../api/auth_api"
import SpinnerModal from "./Spinner";
import UserProfileItem from "./UserProfileItem";

export default function UserProfileModal({ show, close }) {
    const { user } = useContext(AuthContext);
    const [UserProfileData, setUserProfileData] = useState({});
    const [IsLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        api.GetProfileInfo(user.user_id)
        .then(profile => {
            if (profile.status === 200) {
                setUserProfileData(profile.data[0]);                
                setIsLoading(false);
            }
        })
        .catch(err => console.error(err))
        
    }, [])


    return (
        <>
            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {IsLoading && <SpinnerModal/>}
                    {UserProfileData && <UserProfileItem data={UserProfileData}/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={close}>
                        Save Changes
                    </Button>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
