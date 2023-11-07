import TopProduct from "./TopProduct.jsx";
import OfferProducts from "./OfferProducts.jsx";
import { useEffect, useState } from "react"
import * as api from "../api/GetAllProducts"



export default function ProductsMain ({}) {
    const [ListOfProducts, SetListOfProducts] = useState([])

    useEffect ( () => {
        
        api.ListOfProducts()
        .then( (result) => SetListOfProducts(result))
        .catch( (err) => console.log(err) );

    }, [])

    const ordered_lsit = ListOfProducts.sort(function(a, b){return b.normal_price - a.normal_price})
    return (
        <>
            <OfferProducts 
                promoList={ListOfProducts.filter(product => product.promo_price)}
                
            />
            <TopProduct 
                topProductList={ordered_lsit.slice(0,5)}
            />
        </>
    )
}