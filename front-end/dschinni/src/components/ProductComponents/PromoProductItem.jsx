import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function PromoProductItem({
    index,
    name,
    desc,
    oldPrice,
    newPrice,
    showUser
}) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const BuyHandler = () => {
        if (user.email) {
            navigate("products");
        }
        else {
            showUser();
        }
    }

    return (
        <div className={index > 0 ? "carousel-item": "carousel-item active"}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="banner_taital">{name}</h1>
                        <p className="banner_text">{desc}</p>
                        <div className="read_bt">
                            <div className="banner_price">
                                <span className="old-price">{oldPrice} лв.</span>
                                <span className="new-price">{newPrice} лв.</span>
                            </div>
                            <Link 
                            onClick={BuyHandler} 
                            >Buy Now</Link>                            
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="banner_img">
                            <img src={`images/${name}.webp`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
