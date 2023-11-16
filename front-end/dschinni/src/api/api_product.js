import * as requester from "./requester"

const BaseUrl = 'http://127.0.0.1:8000/rest/'


export const ListOfProducts = async () => requester.get(`${BaseUrl}all_products/`)


export const Checkout = async (data) => requester.post(`${BaseUrl}checkout/`, data)

export const ProductImages = async (id) => requester.get(`${BaseUrl}all_products_images/${id}/`)