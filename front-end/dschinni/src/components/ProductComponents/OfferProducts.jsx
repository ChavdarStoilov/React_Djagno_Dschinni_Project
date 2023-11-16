import PromoProductItem from "./PromoProductItem";

export default function OfferProducts({
    promoList
}) {
    return (
        <div className="banner_section layout_padding">
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
            >
                <div className="carousel-inner banner-inner">
                {
                    promoList.map((product, index) => (
                        <PromoProductItem 
                            key={product.id}
                            index={index}
                            name={product.name}
                            desc={product.descrition}
                            oldPrice= {product.normal_price}
                            newPrice= {product.promo_price}
                        />
                    ))
                }
                </div>
            </div>
        </div>
    );
}
