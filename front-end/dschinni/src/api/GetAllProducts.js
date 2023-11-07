const BaseUrl = 'http://127.0.0.1:8000/rest/all_products/'


export const ListOfProducts = async () => {
    try {
    
        const response = await fetch(BaseUrl)

        const result  = await response.json()

        return result
    } catch (err) { 
        return err
    }
}