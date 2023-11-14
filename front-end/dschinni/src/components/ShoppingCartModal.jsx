import CloseButton from "react-bootstrap/CloseButton";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function ShoppingCartModal({ showCartModal, closeCartModal }) {
    return (
        <>
            <Modal
                size="lg"
                show={showCartModal}
                onHide={closeCartModal}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header>
                    <Modal.Title className="table-custom-color">Shopping Cart</Modal.Title>
                    <CloseButton />
                </Modal.Header>
                <Modal.Body>
                    <table
                        id="cart"
                        className="table table-hover table-condensed"
                    >
                        <thead>
                            <tr>
                                <th className="table-custom-color">Product</th>
                                <th className="table-custom-color">Price</th>
                                <th className="table-custom-color">Quantity</th>
                                <th className="text-center table-custom-color">Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-th="Product">
                                    <div className="table_row">
                                        <div className="col-sm-2 hidden-xs">
                                            <img
                                                src={`images/Mike hookah set.webp`}
                                                alt="..."
                                                className="img-responsive"
                                            />
                                        </div>
                                        <div className="col-sm-10">
                                            <h4 className="table-custom-color nomargin">
                                                Product 1
                                            </h4>
                                        </div>
                                    </div>
                                </td>
                                <td data-th="Price" className="table-custom-color">$5.11</td>
                                <td data-th="Quantity">
                                    <input
                                        type="number"
                                        className="form-control text-center"
                                        defaultValue={1}
                                    />
                                </td>
                                <td data-th="Subtotal" className="text-center table-custom-color">
                                    $5.11
                                </td>
                                <td className="actions" data-th="">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </td>
                            </tr>
                            <tr>
                                <td data-th="Product">
                                    <div className="table_row">
                                        <div className="col-sm-2 hidden-xs">
                                            <img
                                                src="http://placehold.it/100x100"
                                                alt="..."
                                                className="img-responsive"
                                            />
                                        </div>
                                        <div className="col-sm-10">
                                            <h4 className="nomargin">
                                                Product 1
                                            </h4>
                                        </div>
                                    </div>
                                </td>
                                <td data-th="Price">$5.11</td>
                                <td data-th="Quantity">
                                    <input
                                        type="number"
                                        className="form-control text-center"
                                        defaultValue={1}
                                    />
                                </td>
                                <td data-th="Subtotal" className="text-center">
                                    $5.11
                                </td>
                                <td className="actions" data-th="">
                                </td>
                            </tr>
                            <tr>
                                <td data-th="Product">
                                    <div className="table_row">
                                        <div className="col-sm-2 hidden-xs">
                                            <img
                                                src="http://placehold.it/100x100"
                                                alt="..."
                                                className="img-responsive"
                                            />
                                        </div>
                                        <div className="col-sm-10">
                                            <h4 className="nomargin">
                                                Product 1
                                            </h4>
                                        </div>
                                    </div>
                                </td>
                                <td data-th="Price">$5.11</td>
                                <td data-th="Quantity">
                                    <input
                                        type="number"
                                        className="form-control text-center"
                                        defaultValue={1}
                                    />
                                </td>
                                <td data-th="Subtotal" className="text-center">
                                    $5.11
                                </td>
                                <td className="actions" data-th="">
                                    <button className="btn btn-danger btn-sm">
                                        <FontAwesomeIcon icon="fas fa-trash-alt" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <span
                                        className="btn btn-warning"
                                        onClick={closeCartModal}
                                    >
                                        <i className="fa fa-angle-left"></i>{" "}
                                        Continue Shopping
                                    </span>
                                </td>
                                <td colSpan="2" className="hidden-xs"></td>
                                <td className="hidden-xs text-center table-custom-color">
                                    <strong>Total $ 5.11</strong>
                                </td>
                                <td>
                                    <a
                                        href="#"
                                        className="btn btn-success btn-block"
                                    >
                                        Checkout{" "}
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </Modal.Body>
            </Modal>
        </>
    );
}
