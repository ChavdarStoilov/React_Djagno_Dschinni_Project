import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProductImage from "./ProductImage";
import SpinnerModal from "../UitilsComponents/Spinner"
import * as api from "../../api/api_product"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCaretRight, faCaretLeft, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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
    const [currentPage, setCurrentPage] = useState(1);
    const [ImagesPerPage] = useState(1);
    const [LoadingModal, setLoadingModal] = useState();

    

    const handlerHidePicture = () => {
        setShowPictures(false)
        setBtn(<Button onClick={handlerShowPicture}>Pictures <FontAwesomeIcon icon={faCaretRight} /></Button>)
    };

    const handlerShowPicture = () => {
        setLoadingModal(true);
        setShowPictures(true);
        api.ProductImages(id)
        .then((result) => {
            const ListOfImage = result.data.map(image => <ProductImage key={id} data={image}/>)
            setProductImages(ListOfImage)
        })
        .catch((error) => console.log(error))
        .finally(() => setLoadingModal(false));
        setBtn(<Button onClick={handlerHidePicture}><FontAwesomeIcon icon={faCaretLeft} /> Details</Button>)
    }

    const [Btn, setBtn] = useState(<Button onClick={handlerShowPicture}>Pictures <FontAwesomeIcon icon={faCaretRight} /></Button>);
    
    

    const indexOfLastImage = currentPage * ImagesPerPage;
    const indexOfFirstImage = indexOfLastImage - ImagesPerPage;
    const currentImage = ProductImages ? ProductImages.slice(indexOfFirstImage, indexOfLastImage) : 0;

    const nextImage = () => {

        if (currentPage + 1 > ProductImages.length) {
            setCurrentPage(1)
        }
        else {
            setCurrentPage(currentPage + 1)

        }

    }

    const previousImage = () => {
        if (currentPage - 1 < 1){
            setCurrentPage(ProductImages.length)
        }
        else {
            setCurrentPage(currentPage - 1)
        }
    }


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
                {LoadingModal ? <SpinnerModal cname={'detailsSpinner'}/> : 
                <>
                    {ShowPictures ? <>
                        <FontAwesomeIcon icon={faArrowLeft} onClick={previousImage}/>
                        {currentImage} 
                        <FontAwesomeIcon icon={faArrowRight} onClick={nextImage}/>
                    </>  :
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
                }</>}
            </Modal.Body>
            <Modal.Footer>
                {Btn}
            </Modal.Footer>
        </Modal>
    );
}
