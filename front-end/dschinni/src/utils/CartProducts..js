export const CartProducts = () => {
    const ondData = JSON.parse(localStorage.getItem('products'))
    const newData = {

    }
    
    ondData.map(product => {
        !newData[product.id] ? newData[product.id] = {
            _id:product.id,
            name:product.name,
            price:product.price,
            counter:1
        } :
        newData[product.id].counter += 1
    })

    return newData

}