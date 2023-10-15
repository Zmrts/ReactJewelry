import { useState } from "react";
import { OrderDetails } from "./OrderDetails";

function Order(props) {

   

    const {array} = props;

    const [isOpenDetails, setIsOpenDetails] = useState(false);


    const calcTotalQtyItems = () => {
        let totalQty = 0;
        array.forEach((el) => {
            if (el.quantity) totalQty += el.quantity;
        })

        return totalQty
    }

    const totalPrice = array[array.length - 1].totalPrice;
    const dateAndTime = array[array.length - 1].dateAndTime;
    const idOrder = array[array.length - 1].idOrder;

    const toggleOpenDetails = () => {
        setIsOpenDetails(!isOpenDetails);
    }

    return <div className={`order_list-item ${isOpenDetails ? 'openDetails' : ''} `}>
       
       <div className="order_list_info">
       <h2>Заказ #{idOrder}</h2>
       <p>Дата: <span style={{fontWeight:'600'}}s>{dateAndTime}</span></p>
       <p>Количество предметов: <span style={{fontWeight:'600'}}>{calcTotalQtyItems()} </span> </p>
       <p>Сумма заказа: <span style={{fontWeight:'600'}}>{totalPrice} руб.</span></p>
       <button style={{padding:'0.5rem 1rem'}} onClick={toggleOpenDetails} className="default_btn">{isOpenDetails ? 'Скрыть детали' : 'Показать детали'}</button>
       </div>
       
        <div className='order_details'>
        <h3 style={{ textAlign:'center',}}>Детали заказа</h3>
        <div className="order_list_details">
            
            {array.map((el) => {
                if (el.title) {
                    return <OrderDetails {...el} />
                }
            }) }
        </div>
        </div>   
    </div>
}


export {Order}