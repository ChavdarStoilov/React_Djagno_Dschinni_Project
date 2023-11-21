import PromoProductItem from "./PromoProductItem";

export default function OfferProducts({ promoList }) {
    return (
        <div className="banner_section layout_padding">
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
            >
                <div className="carousel-inner banner-inner">
                    {promoList.length > 0 ? 
                        promoList.map((product, index) => (
                            <PromoProductItem
                                key={product.id}
                                index={index}
                                name={product.name}
                                desc={product.descrition}
                                oldPrice={product.normal_price}
                                newPrice={product.promo_price}
                            />
                        ))
                        : <h1 className="home_titel">Welcome in Dschinni Shop</h1>
                    }
                </div>
            </div>
        </div>
    );
}
