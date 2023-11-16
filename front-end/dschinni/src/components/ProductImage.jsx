export default function ProductImage({
    data
}) {
    return (
        <img src={data.image} alt={data.product_id} />
    )
}