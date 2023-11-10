export default function ProductsItem({
    name,
    price,
    desc,
    techDecs,
    kit,
    stock
}) {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="product_box">
                <h4 className="bursh_text">{name}</h4>
                <p className="lorem_text">
                    {desc}
                </p>
                <img src="images/img-1.png" className="image_1" />
                <div className="btn_main">
                    <div className="buy_bt">
                        <ul>
                            <li className="active">
                                <a href="#">Buy Now</a>
                            </li>
                        </ul>
                    </div>
                    <h3 className="price_text">Цена: {price}</h3>
                </div>
            </div>
        </div>
    );
}