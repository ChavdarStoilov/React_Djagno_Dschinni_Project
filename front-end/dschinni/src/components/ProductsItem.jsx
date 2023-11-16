import { useState } from "react";
import ProductDetails from "./ProductDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ProductsItem({
    id,
    name,
    image,
    price,
    desc,
    techDecs,
    kit,
    stock,
    order,
}) {
    const [ShowDatails, setShowDetails] = useState(false);
    const [SuccessAdded, setSuccsessAdded] = useState(false);

    const AddInOrderHandler = () => {
        setSuccsessAdded(true);
        const data = {
            id: id,
            name: name,
            price: price,
        };
        order(data);

        setTimeout(() => {
            setSuccsessAdded(false);
          }, 2000);
        
        
    };

    const handleCloseDetailsModal = () => setShowDetails(false);
    const handleShowDetailsModal = () => setShowDetails(true);

    return (
        <>
            {ShowDatails && <ProductDetails 
                id={id}
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
                    <img src={image} className="image_1" />
                    <div className="btn_main">
                        <div className="buy_bt">
                            <ul>
                                <li className="active">
                                    <a
                                        onClick={AddInOrderHandler}
                                        className="buy-btn"
                                    >
                                        {SuccessAdded ? <FontAwesomeIcon icon={faCheck} style={{color: "#66ff4a",}} /> : "Buy Now"}
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
