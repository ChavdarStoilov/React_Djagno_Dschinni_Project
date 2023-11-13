import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function UserProfileModal({ show, close }) {
    return (
        <>
            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you are reading this text in a modal!
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
