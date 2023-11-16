import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProductImage from "./ProductImage";
import * as api from "../api/api_product"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ProductDetails({
    id,
    show,
    close,
    name,
    desc,
    techDecs,
    kit,
    stock,
}) {
    const [ShowPictures, setShowPictures] = useState();
    const [ProductImages, setProductImages] = useState([]);

    const handlerHidePicture = () => {
        setShowPictures(false)
        setBtn(<Button onClick={handlerShowPicture}>Pictures <FontAwesomeIcon icon={faCaretRight} /></Button>)
    };

    const handlerShowPicture = () => {
        setShowPictures(true);
        
        api.ProductImages(id)
        .then((result) => setProductImages(result.data))

        setBtn(<Button onClick={handlerHidePicture}><FontAwesomeIcon icon={faCaretLeft} /> Details</Button>)
    }

    const [Btn, setBtn] = useState(<Button onClick={handlerShowPicture}>Pictures <FontAwesomeIcon icon={faCaretRight} /></Button>);
    
    

    console.log(ProductImages);

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
                {ShowPictures ? ProductImages.map(image => <ProductImage key={image.id} data={image} />) :
                <>
                    <h2 className="details-custom-titles details-custom-color">Description:</h2>
                    <p>{desc}</p>
                    <h2 className="details-custom-titles details-custom-color">Technicals:</h2>
                    <p>{techDecs}</p>
                    <h2 className="details-custom-titles details-custom-color">Kit included:</h2>
                    <p>{kit}</p>
                    <h2 className="details-custom-titles details-custom-color">Stock</h2>
                    <p className="stock-items">{stock}</p>
                </>
                }
            </Modal.Body>
            <Modal.Footer>
                {Btn}
            </Modal.Footer>
        </Modal>
    );
}
