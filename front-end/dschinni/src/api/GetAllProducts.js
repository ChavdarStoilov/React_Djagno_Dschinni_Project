import * as requester from "../api/requester"

const BaseUrl = 'http://127.0.0.1:8000/rest/all_products/'


export const ListOfProducts = async () => requester.get(BaseUrl)