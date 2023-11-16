import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetails({
    show,
    close,
    name,
    desc,
    techDecs,
    kit,
    stock,
}) {
    return (
        <Modal
            show={show}
            onHide={close}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="details-modal"
        >
            <Modal.Header>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className="details-custom-color"
                >
                    {name}
                </Modal.Title>
                <FontAwesomeIcon icon={faTimes} onClick={close} />
            </Modal.Header>
            <Modal.Body className="details-custom-color">
                <h2 className="details-custom-titles details-custom-color">Description:</h2>
                <p>{desc}</p>
                <h2 className="details-custom-titles details-custom-color">Technicals:</h2>
                <p>{techDecs}</p>
                <h2 className="details-custom-titles details-custom-color">Kit included:</h2>
                <p>{kit}</p>
                <h2 className="details-custom-titles details-custom-color">Stock</h2>
                <p className="stock-items">{stock}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={close}>Pictures </Button>
            </Modal.Footer>
        </Modal>
    );
}
