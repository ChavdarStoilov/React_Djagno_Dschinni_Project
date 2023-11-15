export const CartProducts = () => {
    const newValue = [];

    const Data = localStorage.getItem("products");
    const ParseJSON = Data ? JSON.parse(Data) : null;

    if (ParseJSON) {
        ParseJSON.map((product) => {
            !newValue[product.id]
                ? (newValue[product.id] = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    counter: 1,
                })
                : (newValue[product.id].counter += 1);
        },)
    }

    return newValue;

}