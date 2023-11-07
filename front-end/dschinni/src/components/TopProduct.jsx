export default function TopProduct () {
    return (
        <div className="product_section layout_padding">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="product_taital">Our Top Products</h1>
                </div>
            </div>
            <div className="product_section_2 layout_padding">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="product_box">
                            <h4 className="bursh_text">Beauty Bursh</h4>
                            <p className="lorem_text">
                                incididunt ut labore et dolore magna
                                aliqua. Ut enim{" "}
                            </p>
                            <img
                                src="images/img-1.png"
                                className="image_1"
                            />
                            <div className="btn_main">
                                <div className="buy_bt">
                                    <ul>
                                        <li>
                                            <a href="#">Buy Now</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="price_text">
                                    Price $30
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="seemore_bt">
                    <a href="#">Show All Products</a>
                </div>
            </div>
        </div>
    </div>
    )
}