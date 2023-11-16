import PromoProductItem from "./PromoProductItem";
import { useState } from "react";
import UserModal from "../UserComponents/UserModal";

export default function OfferProducts({ promoList }) {
    const [ShowUserModal, setShowUserModal] = useState(false);

    const handleCloseUserModal = () => setShowUserModal(false);

    const handleShowUserModal = () => {
        setShowUserModal(true);
    };


    return (
        <>
            {ShowUserModal && <UserModal showUserModal={handleShowUserModal} closeUerModal={handleCloseUserModal} type="Login"/>}
            <div className="banner_section layout_padding">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner banner-inner">
                        {promoList.map((product, index) => (
                            <PromoProductItem
                                key={product.id}
                                index={index}
                                name={product.name}
                                desc={product.descrition}
                                oldPrice={product.normal_price}
                                newPrice={product.promo_price}
                                showUser={handleShowUserModal}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
