import Transitions from "../UtilsComponents/Transition";
import ProductsItem from "./ProductsItem";
import * as api from "../../api/api_product";
import { useState, useEffect } from "react";
import UserModal from "../UserComponents/UserModal";

export default function Products({ ordering }) {
    const [ListOfProducts, SetListOfProducts] = useState([]);
    const [FetchFailed, setFetchFailed] = useState(false);
    const [ShowUserModal, setShowUserModal] = useState(false);

    const handleCloseUserModal = () => setShowUserModal(false);

    const handleShowUserModal = () => {
        setShowUserModal(true);
    };

    useEffect(() => {
        api.ListOfProducts()
            .then((result) => SetListOfProducts(result.data))
            .catch((err) => {
                setFetchFailed(err);
            });
    }, []);

    const OrderProductHendler = (product) => {
        ordering("add", product);
    };

    return (
        <>
            <Transitions>
                {ShowUserModal && (
                    <UserModal
                        showUserModal={handleShowUserModal}
                        closeUerModal={handleCloseUserModal}
                        type="Login"
                    />
                )}

                <div className="product_section layout_padding">
                    <div className="container">
                        <div className="row prodcut_row">
                            <div className="col-sm-12">
                                <h1 className="product_taital">Our Products</h1>
                            </div>
                        </div>
                        <div className="product_section_2 layout_padding">
                            <div className="row">
                                {ListOfProducts ? (
                                    !FetchFailed &&
                                    ListOfProducts.map((product) => (
                                        <ProductsItem
                                            key={product.id}
                                            id={product.id}
                                            name={product.name}
                                            image={product.image}
                                            price={
                                                product.promo_price
                                                    ? product.promo_price
                                                    : product.normal_price
                                            }
                                            desc={product.descrition}
                                            techDecs={product.technical_details}
                                            kit={product.kit_scope}
                                            stock={product.stock}
                                            order={OrderProductHendler}
                                            showUserModal={handleShowUserModal}
                                        />
                                    ))
                                ) : (
                                    <h2 className="no-item-msg">
                                        There not have items yet!
                                    </h2>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Transitions>
        </>
    );
}
