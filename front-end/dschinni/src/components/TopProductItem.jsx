export default function TopProductItem({
    _id,
    name,
    price,
}) {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="product_box">
                <h4 className="bursh_text">{name}</h4>
                <img src={`images/${name}.webp`} className="image_1" />
                <div className="btn_main">
                    <div className="buy_bt">
                        <ul>
                            <li>
                                <a href="#">Buy Now</a>
                            </li>
                        </ul>
                    </div>
                    <h3 className="price_text">{price} лв.</h3>
                </div>
            </div>
        </div>
    );
}
