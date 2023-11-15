import CloseButton from "react-bootstrap/CloseButton";
import Modal from "react-bootstrap/Modal";
import ShoppingCartItem from "./ShoppingCartItem";
import { useState } from "react";


export default function ShoppingCartModal({ showCartModal, closeCartModal, ordering }) {

    const [NewData, setNewDate] = useState(() => {
        const newValue = [];

        const Data = localStorage.getItem("products");
        const ParseJSON = Data ? JSON.parse(Data) : null;
        
        if (ParseJSON) {
            ParseJSON.map((product) => {
                    !newValue[product.id]
                        ? (newValue[product.id] = {
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                counter: 1,
                            })
                        : (newValue[product.id].counter += 1);
                },)
        }

        return newValue

    });

    const DeleteItemHandler = (deletedItem) => {
        const DataAfterDelete = NewData.filter((item) => { 
            return item !== deletedItem })

        setNewDate(DataAfterDelete);
        ordering('delete', DataAfterDelete);
    }


    return (
        <>
            <Modal
                size="lg"
                show={showCartModal}
                onHide={closeCartModal}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header>
                    <Modal.Title className="table-custom-color">
                        Shopping Cart
                    </Modal.Title>
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
                                <th className="text-center table-custom-color">
                                    Subtotal
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {NewData && NewData.map(product => (
                                <ShoppingCartItem
                                    key={product.id}
                                    data={product}
                                    deleteItem={DeleteItemHandler}
                                />
                            ))}
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
                                    <strong>{NewData && 
                                    NewData.map(product => parseFloat(product.counter > 1 ? product.price * product.counter : product.price)).
                                    reduceRight((acc, cur) => acc + cur, 0)} Лв.</strong>
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
