import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ShoppingCartModal({
    showShoppingCart,
    closeShoppingCart,
}) {
    return (
        <>
            <Modal show={showShoppingCart} onHide={closeShoppingCart}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeShoppingCart}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeShoppingCart}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
