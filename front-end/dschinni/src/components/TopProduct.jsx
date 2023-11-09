import TopProductItem from "./TopProductItem";
import { Link } from  "react-router-dom"

export default function TopProduct({ topProductList }) {
    return (
        <div className="product_section layout_padding top_products">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="product_taital">Our Top Products</h1>
                    </div>
                </div>
                <div className="product_section_2 layout_padding">
                    <div className="row">
                        { topProductList.map( product => (
                            <TopProductItem 
                                key={product.id}
                                _id={product.id}
                                name={product.name}
                                price={product.promo_price ? product.promo_price : product.normal_price}
                            />
                        ))
                        }
                    </div>
                    <div className="seemore_bt">
                        <Link to="/products">Show All Products</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
