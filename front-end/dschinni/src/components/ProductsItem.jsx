import { useState } from "react";
import ProductDetails from "./ProductDetails";

export default function ProductsItem({
    id,
    name,
    price,
    desc,
    techDecs,
    kit,
    stock,
    order,
}) {
    const [ShowDatails, setShowDetails] = useState(false);
    const AddInOrderHandler = () => {
        const data = {
            id: id,
            name: name,
            price: price,
        };
        order(data);
    };

    const handleCloseDetailsModal = () => setShowDetails(false);
    const handleShowDetailsModal = () => setShowDetails(true);

    return (
        <>
            {ShowDatails && <ProductDetails 
                show={handleShowDetailsModal} 
                close={handleCloseDetailsModal} 
                name={name}
                desc={desc}
                techDecs={techDecs}
                kit={kit}
                stock={stock}

                />}

            <div className="col-lg-3 col-sm-6">
                <div className="product_box">
                    <h4 className="bursh_text">{name}</h4>
                    <img src={`images/${name}.webp`} className="image_1" />
                    <div className="btn_main">
                        <div className="buy_bt">
                            <ul>
                                <li className="active">
                                    <a
                                        onClick={AddInOrderHandler}
                                        className="buy-btn"
                                    >
                                        Buy Now
                                    </a>
                                </li>
                                <li className="active">
                                    <a
                                        onClick={handleShowDetailsModal}
                                        className="buy-btn"
                                    >
                                        Details
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <h3 className="price_text">Цена: {price}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}
