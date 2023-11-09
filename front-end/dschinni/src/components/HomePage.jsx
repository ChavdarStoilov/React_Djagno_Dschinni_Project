import OfferProducts from "./OfferProducts.jsx";
import { useEffect, useState } from "react"
import * as api from "../api/GetAllProducts"

import Transitions from "./Transition";

export default function HomePage() {
    const [ListOfProducts, SetListOfProducts] = useState([])

    useEffect ( () => {
        
        api.ListOfProducts()
        .then( (result) => SetListOfProducts(result))
        .catch( (err) => console.log(err) );

    }, [])

    return (
        <Transitions>
            <OfferProducts 
                promoList={ListOfProducts.filter(product => product.promo_price)}  
            />
        </Transitions>
    );
}
