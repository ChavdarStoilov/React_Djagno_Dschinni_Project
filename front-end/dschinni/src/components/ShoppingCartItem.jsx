import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function ShoppingCartItem({
    data,
    deleteItem
}) {

    const Deletion = () => {
        deleteItem(data);
    }
    return (
        <tr>
            <td data-th="Product">
                <div className="table_row">
                    <div className="col-sm-2 hidden-xs">
                        <img
                            src={`images/Mike hookah set.webp`}
                            alt="..."
                            className="img-responsive"
                        />
                    </div>
                    <div className="col-sm-10">
                        <h4 className="table-custom-color nomargin">
                            {data.name}
                        </h4>
                    </div>
                </div>
            </td>
            <td data-th="Price" className="table-custom-color price">
                {data.price} Лв.
            </td>
            <td data-th="Quantity">
                <input
                    type="number"
                    className="form-control text-center counter"
                    defaultValue={1}
                />
            </td>
            <td data-th="Subtotal" className="text-center table-custom-color">
                {data.price * data.counter} Лв.
            </td>
            <td className="actions" data-th="">
                <FontAwesomeIcon icon={faTrashAlt} onClick={Deletion}/>
            </td>
        </tr>
    );
}
