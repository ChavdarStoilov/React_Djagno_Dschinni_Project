import * as requester from "./requester"

const BaseUrl = 'http://127.0.0.1:8000/rest/'


export const ListOfProducts = async () => requester.get(`${BaseUrl}all_products/`)


export const Checkout = async () => requester.get(`${BaseUrl}checkout/`)