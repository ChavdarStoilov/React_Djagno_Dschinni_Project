import CloseButton from "react-bootstrap/CloseButton";
import Modal from "react-bootstrap/Modal";
import ShoppingCartItem from "./ShoppingCartItem";
import { useState } from "react";
import * as api from "../api/api_product"
import { CartProducts } from "../utils/CartProducts.";
import SpinnerModal from "./Spinner";


export default function ShoppingCartModal({ showCartModal, closeCartModal, ordering }) {
    const [IsLoading, setIsLoading] = useState(false);

    const [NewData, setNewDate] = useState(() => {
        
        return CartProducts();

    });

    const DeleteItemHandler = (deletedItem) => {
        const DataAfterDelete = NewData.filter((item) => { 
            return item !== deletedItem })

        setNewDate(DataAfterDelete);
        ordering('delete', DataAfterDelete);
    }


    const CheckOutHandler = () => {
        setIsLoading(true);

        const Data = CartProducts().filter(function (el) {
            return el != null;
          });
        if (Data.length > 0) {

            api.Checkout(Data.map(product => ({
                "quantity": product.counter,
                "price": product.price,
                "product": product.id
            })))
            .then((result) => {
                if (result.status === 201) {
                    ordering('delete',[])
                    setNewDate([])
                    setIsLoading(false);
                }
            })
        }
    };



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
                {IsLoading ? <SpinnerModal /> :
                
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
                                        onClick={CheckOutHandler}
                                    >
                                        Checkout{" "}
                                        <i className="fa fa-angle-right" ></i>
                                    </a>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </Modal.Body>
                }
            </Modal>
        </>
    );
}
