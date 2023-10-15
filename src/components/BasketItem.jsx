import { useRef } from "react";

function BasketItem(props) {
  const {
    title,
    image,
    price,
    quantity,
    removeItemFromBasket = Function.prototype,
    incQty = Function.prototype,
    decQty = Function.prototype,
  } = props;


  const basketItemRef = useRef();
  const basketItem = basketItemRef.current;

  return (
    <li ref={basketItemRef} className="basketItem">
      <a onClick={() => removeItemFromBasket(image, basketItem)} className="removeItem_btn">
      <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 10 10"
            >
              <path
                d="M0.828427 2.24264L2.24264 0.828427L9.31371 7.89949L7.89949 9.31371L0.828427 2.24264Z"
                fill="#108778"
              />
              <path
                d="M7.89949 0.828427L9.31371 2.24264L2.24264 9.31371L0.828427 7.89949L7.89949 0.828427Z"
                fill="#108778"
              />
            </svg>
      </a>
      <div className="basket_item_info">
        <img src={image} alt={title} />
        <div className="basket_item_description">
          <p>{title}</p>
          <b>{price * quantity} руб.</b> 
          <div className="basketItem_total_price">
        <span>Количество:</span>
        <button onClick={() => incQty(image)} disabled={quantity >=5 ? true : false}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 0H6V10H4V0Z" fill= {quantity===5 ? '#363838' : "#108778"} />
            <path d="M10 4V6L0 6L8.74228e-08 4L10 4Z" fill= {quantity===5 ? '#363838' : "#108778"} />
          </svg>
        </button>
        <span>{quantity}</span>
        <button onClick={() => decQty(image)} disabled={ quantity <=1 ? true : false}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 4V6L0 6L8.74228e-08 4L10 4Z" fill= {quantity===1 ? '#363838' : "#108778"} />
          </svg>
        </button>
      </div>
        </div>
      </div>

      
    </li>
  );
}

export { BasketItem };
