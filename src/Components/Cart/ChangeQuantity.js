const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity +1;
        setQuantity(newQuantity)
    }

    const removeQuantity = () => {
        if(quantity<=1)return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity)
    }

    return ( <div>
        Quantity:
        <button className="btn_quantity" onClick={addQuantity}>+</button>
        <span>{quantity}</span>
        <button className="btn_quantity" onClick={removeQuantity}>-</button>
    </div>)
}

export default ChangeQuantity;