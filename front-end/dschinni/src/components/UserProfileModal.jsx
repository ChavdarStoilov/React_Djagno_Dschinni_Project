import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function UserProfileModal() {

    return (
        <>
            <Modal show={showUserModal} onHide={closeUerModal} >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeUerModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeUerModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
