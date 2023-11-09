import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function UserProfileModal({  
    show,
    close
}) {

    return (
        <>
            <Modal show={show} onHide={close} >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={close}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
