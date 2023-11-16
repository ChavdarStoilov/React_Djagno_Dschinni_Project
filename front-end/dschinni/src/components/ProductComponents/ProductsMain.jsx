import OfferProducts from "./OfferProducts";
import { useEffect, useState } from "react"
import * as api from "../api/GetAllProducts"



export default function ProductsMain ({}) {
    const [ListOfProducts, SetListOfProducts] = useState([])

    useEffect ( () => {
        
        api.ListOfProducts()
        .then( (result) => SetListOfProducts(result))
        .catch( (err) => console.log(err) );

    }, [])

    return (
        <>
            <OfferProducts 
                promoList={ListOfProducts.filter(product => product.promo_price)}
                
            />
        </>
    )
}