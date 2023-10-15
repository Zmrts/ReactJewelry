

function OrderDetails(props) {

   const {title, price, image, quantity} = props;
   

    return <div className="order_list_details-item">
        <img style={{justifySelf:'start'}} width='100vw'  src={image} alt="order_item_image" />
        <p style={{fontWeight:'600'}}>{title}</p>
        <p style={{justifySelf:'start'}}>Цена украшения: <span style={{fontWeight:'600'}}>{price} руб.</span></p>
        <p>Количество: <span style={{fontWeight:'600', justifySelf:'start'}}>{quantity}</span></p>
        <p>Общая стоимость: <span style={{fontWeight:'600'}}> {quantity * price} руб.</span></p>
        </div>
}

export {OrderDetails}