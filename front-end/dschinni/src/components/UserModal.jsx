import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import UserProfileModal from "./UserProfileModal";
import Modal from "react-bootstrap/Modal";

export default function UserModal({ showUserModal, closeUerModal }) {
    return (
        <Modal show={showUserModal} onHide={closeUerModal}>
            <RegisterModal close={closeUerModal} />
        </Modal>
    );
}
