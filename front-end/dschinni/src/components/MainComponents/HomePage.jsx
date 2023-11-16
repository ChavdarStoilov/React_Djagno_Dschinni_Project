import OfferProducts from "../ProductComponents/OfferProducts";
import { useEffect, useState } from "react"
import * as api from "../../api/api_product.js"
import logo from "../../assets/logo.webp";
import Transitions from "../UtilsComponents/Transition.jsx";

export default function HomePage() {
    const [ListOfProducts, SetListOfProducts] = useState([])

    useEffect ( () => {
        
        api.ListOfProducts()
        .then( (result) => {
            SetListOfProducts(result.data)
        })
        .catch( (err) => console.log(err) );

    }, [])

    return (
        <Transitions>
            {ListOfProducts ?
                <OfferProducts 
                    promoList={ListOfProducts.filter(product => product.promo_price)}  
                />
                :
                <img src={logo} alt="logo" />
            }
        </Transitions>
    );
}
