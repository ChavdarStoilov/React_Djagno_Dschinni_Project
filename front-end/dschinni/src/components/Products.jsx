import Transitions from "./Transition";
import ProductsItem from "./ProductsItem";
import * as api from "../api/GetAllProducts";
import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/CustomLocalUse"


export default function Products() {
    const [ListOfProducts, SetListOfProducts] = useState([]);
    const [FetchFailed, setFetchFailed] = useState(false);
    const [OrderingProducts, setOrderingProducts] = useLocalStorage('products', [])

    useEffect(() => {

        api.ListOfProducts()
            .then((result) => SetListOfProducts(result.data))
            .catch((err) => {
                setFetchFailed(err)

            })
    }, []);

    const OrderProductHendler = (products) => {
        setOrderingProducts([...OrderingProducts, products])

    }

    console.log(OrderProductHendler);

    return (
        <>
            <Transitions>
                <div className="product_section layout_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1 className="product_taital">Our Products</h1>
                            </div>
                        </div>
                        <div className="product_section_2 layout_padding">
                            <div className="row">
                                {!FetchFailed && ListOfProducts.map((product) => (
                                    <ProductsItem
                                        key={product.id}
                                        name={product.name}
                                        price={
                                            product.promo_price
                                                ? product.promo_price
                                                : product.normal_price
                                        }
                                        desc={product.description}
                                        techDecs={product.technical_details}
                                        kit={product.kit_scope}
                                        stock={product.stock}
                                        order={OrderProductHendler}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Transitions>
        </>
    );
}
