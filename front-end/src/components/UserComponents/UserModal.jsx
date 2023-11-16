import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import UserProfileModal from "./UserProfileModal";
import Modal from "react-bootstrap/Modal";




export default function UserModal({ showUserModal, closeUerModal, type }) {
    const ModalTypes = {
        "Login": <LoginModal close={closeUerModal} />,
        "Register": <RegisterModal close={closeUerModal} />,
    }
    return (
        <Modal show={showUserModal} onHide={closeUerModal}>
            {type in ModalTypes ? ModalTypes[type] : <UserProfileModal show={showUserModal} close={closeUerModal}/>}
        </Modal>
    );
}
