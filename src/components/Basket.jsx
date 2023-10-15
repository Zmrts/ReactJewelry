import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BasketItem } from "./BasketItem";
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useMatchMedia } from "../../src/hooks/useMatchMedia";

function Basket(props) {
  const {
    closeBasket = Function.prototype,
    removeItemFromBasket = Function.prototype,
    setBasketCatalog = Function.prototype,
    handleOrderPrice = Function.prototype,
    basketCatalog = [],
    scrollToCatalog = Function.prototype,
    orderList,
    setOrderList = Function.prototype,
    isOpenBasket,
  } = props;

  const [ordered, setOrdered] = useState(false);
  const [isMobile, setIsMobile] = useState(useMatchMedia().isMobile);
  const location = useLocation();


  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if (ordered) setOrdered(false);
    };
  }, []);

  const backToBuys = () => {
    if (location.pathname === "/") {
      scrollToCatalog(100);
    } else {
      navigate("/");
      scrollToCatalog(250);
    }
  };
  const goToOrders = () => {
    navigate('/orders');
    closeBasket();
    setOrdered(false);
  }

  const getCurrentDateAndTime = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0, поэтому добавляем 1
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const formattedDateAndTime = `${day}.${month}.${year} ${hours}:${minutes}`;

    return formattedDateAndTime;
  };

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("keydown", handleKeyDown);
      document
        .querySelector(".overlay")
        .addEventListener("click", handleClickOverlay);
      console.log("корзина смонтирована");
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        console.log("КОрзина размонтирована");
        console.log(ordered)
      };
    }
  }, []);
  const handleClickOverlay = (evt) => {
    if (evt.target.classList.contains("overlay")) {
      closeBasket();
      if (ordered) setOrdered(false);
      
    }
  };
  const handleKeyDown = (evt) => {
    if (evt.key === "Escape") {
      closeBasket();
      if (ordered) setOrdered(false);
    }
  };

  const createOrder = () => {
    const newOrder = [];
    basketCatalog.forEach((el) => {
      newOrder.push(el);
    });
    newOrder.push({
      totalPrice: handleOrderPrice(),
      dateAndTime: getCurrentDateAndTime(),
      idOrder: orderList.length + 1,
    });

    setOrderList([...orderList, newOrder]);
    setBasketCatalog([]);
    setOrdered(true);
  };

  const incQty = (imageURL) => {
    const newOrder = basketCatalog.map((el) => {
      if (el.image === imageURL) {
        const newQty = el.quantity + 1;
        return {
          ...el,
          quantity: newQty,
        };
      } else {
        return el;
      }
    });
    setBasketCatalog(newOrder);
  };

  const decQty = (imageURL) => {
    const newOrder = basketCatalog.map((el) => {
      if (el.image === imageURL) {
        const newQty = el.quantity - 1;
        return {
          ...el,
          quantity: newQty >= 1 ? newQty : 1,
        };
      } else {
        return el;
      }
    });
    setBasketCatalog(newOrder);
    handleOrderPrice();
  };

  const buttonOtherStyles = {
    marginTop:'5rem',
    alignSelf:'normal',
  }

  return (
    <>
      {!isMobile ? (
        <div
          onKeyDown={handleKeyDown}
          style={{ display: `${isOpenBasket ? "block" : "none"}` }}
          className="overlay"
        >
          <div className={`basket`}>
            <div className="basket_header">
              <h2>Корзина</h2>
              <button onClick={() => {closeBasket(); setOrdered(false);}} className="basket_btn_close">
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
              </button>
            </div>
           {ordered ? ( <div className="empty_basket" style={{ padding: "0 1rem" }}>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="150px"
                  height="150px"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#108778"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M6,2v46h25.07422c-0.551,-0.614 -1.04103,-1.282 -1.45703,-2h-21.61719v-42h34v24.17969c0.689,0.116 1.356,0.28958 2,0.51758v-26.69727zM13,11v2h24v-2zM13,25v2h4v-2zM20,25v2h17v-2zM40,30c-5.5,0 -10,4.5 -10,10c0,5.5 4.5,10 10,10c5.5,0 10,-4.5 10,-10c0,-5.5 -4.5,-10 -10,-10zM13,31v2h4v-2zM20,31v2h10.26758c0.529,-0.734 1.1355,-1.404 1.8125,-2zM40,32c4.4,0 8,3.6 8,8c0,4.4 -3.6,8 -8,8c-4.4,0 -8,-3.6 -8,-8c0,-4.4 3.6,-8 8,-8zM44.30078,35.40039l-5.40039,6.29883l-3.30078,-2.5l-1.19922,1.60156l4.69922,3.59961l6.70117,-7.70117zM13,37v2h4v-2zM20,37v2h8.05078c0.057,-0.686 0.1748,-1.352 0.3418,-2z"></path>
                    </g>
                  </g>
                </svg>
                <h3>Заказ #{orderList.length}  оформлен</h3>
                <p>Детали заказа можно посмотреть в разделе "Заказы"</p>
                <button style={buttonOtherStyles} onClick={goToOrders} className="default_btn">
                  Перейти к заказам
                </button>
              </div>)
           : (<> 
            {basketCatalog.length ? (
              <>
                <OverlayScrollbarsComponent
                  defer
                  options={{
                    scrollbars: {
                      theme: "os-theme-dark",
                    },
                  }}
                >
                  <div className="basket_list">
                    {basketCatalog.map((el) => (
                      <BasketItem
                        removeItemFromBasket={removeItemFromBasket}
                        basketCatalog={basketCatalog}
                        incQty={incQty}
                        decQty={decQty}
                        key={el.id}
                        {...el}
                      />
                    ))}
                  </div>
                </OverlayScrollbarsComponent>

                <div className="basket_action">
                  <div className="">
                    <div className="basket_cost">
                      <div className="basket_cost_block">
                        <h4>Итого:</h4>
                        <span className="dashedBlock"></span>
                        <span>
                          {handleOrderPrice()}
                          руб.
                        </span>
                      </div>
                      <button onClick={createOrder} className="default_btn">
                        Оформить заказ
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="empty_basket" style={{ padding: "0 1rem" }}>
                <svg
                  width="140px"
                  height="140px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#108778"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#108778"
                    strokeWidth="0.384"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 1.25C11.3953 1.25 10.8384 1.40029 10.2288 1.65242C9.64008 1.89588 8.95633 2.25471 8.1049 2.70153L6.03739 3.78651C4.99242 4.33487 4.15616 4.77371 3.51047 5.20491C2.84154 5.65164 2.32632 6.12201 1.95112 6.75918C1.57718 7.39421 1.40896 8.08184 1.32829 8.90072C1.24999 9.69558 1.24999 10.6731 1.25 11.9026V12.0974C1.24999 13.3268 1.24999 14.3044 1.32829 15.0993C1.40896 15.9182 1.57718 16.6058 1.95112 17.2408C2.32632 17.878 2.84154 18.3484 3.51047 18.7951C4.15616 19.2263 4.99241 19.6651 6.03737 20.2135L8.10481 21.2984C8.95628 21.7453 9.64006 22.1041 10.2288 22.3476C10.8384 22.5997 11.3953 22.75 12 22.75C12.6047 22.75 13.1616 22.5997 13.7712 22.3476C14.3599 22.1041 15.0437 21.7453 15.8951 21.2985L17.9626 20.2135C19.0076 19.6651 19.8438 19.2263 20.4895 18.7951C21.1585 18.3484 21.6737 17.878 22.0489 17.2408C22.4228 16.6058 22.591 15.9182 22.6717 15.0993C22.75 14.3044 22.75 13.3269 22.75 12.0975V11.9025C22.75 10.6731 22.75 9.69557 22.6717 8.90072C22.591 8.08184 22.4228 7.39421 22.0489 6.75918C21.6737 6.12201 21.1585 5.65164 20.4895 5.20491C19.8438 4.77371 19.0076 4.33487 17.9626 3.7865L15.8951 2.70154C15.0437 2.25472 14.3599 1.89589 13.7712 1.65242C13.1616 1.40029 12.6047 1.25 12 1.25ZM8.7708 4.04608C9.66052 3.57917 10.284 3.2528 10.802 3.03856C11.3062 2.83004 11.6605 2.75 12 2.75C12.3395 2.75 12.6938 2.83004 13.198 3.03856C13.716 3.2528 14.3395 3.57917 15.2292 4.04608L17.2292 5.09563C18.3189 5.66748 19.0845 6.07032 19.6565 6.45232C19.9387 6.64078 20.1604 6.81578 20.3395 6.99174L17.0088 8.65708L8.50895 4.18349L8.7708 4.04608ZM6.94466 5.00439L6.7708 5.09563C5.68111 5.66747 4.91553 6.07032 4.34352 6.45232C4.06131 6.64078 3.83956 6.81578 3.66054 6.99174L12 11.1615L15.3572 9.48289L7.15069 5.16369C7.07096 5.12173 7.00191 5.06743 6.94466 5.00439ZM2.93768 8.30737C2.88718 8.52125 2.84901 8.76413 2.82106 9.04778C2.75084 9.7606 2.75 10.6644 2.75 11.9415V12.0585C2.75 13.3356 2.75084 14.2394 2.82106 14.9522C2.88974 15.6494 3.02022 16.1002 3.24367 16.4797C3.46587 16.857 3.78727 17.1762 4.34352 17.5477C4.91553 17.9297 5.68111 18.3325 6.7708 18.9044L8.7708 19.9539C9.66052 20.4208 10.284 20.7472 10.802 20.9614C10.9656 21.0291 11.1134 21.0832 11.25 21.1255V12.4635L2.93768 8.30737ZM12.75 21.1255C12.8866 21.0832 13.0344 21.0291 13.198 20.9614C13.716 20.7472 14.3395 20.4208 15.2292 19.9539L17.2292 18.9044C18.3189 18.3325 19.0845 17.9297 19.6565 17.5477C20.2127 17.1762 20.5341 16.857 20.7563 16.4797C20.9798 16.1002 21.1103 15.6494 21.1789 14.9522C21.2492 14.2394 21.25 13.3356 21.25 12.0585V11.9415C21.25 10.6644 21.2492 9.7606 21.1789 9.04778C21.151 8.76412 21.1128 8.52125 21.0623 8.30736L17.75 9.96352V13C17.75 13.4142 17.4142 13.75 17 13.75C16.5858 13.75 16.25 13.4142 16.25 13V10.7135L12.75 12.4635V21.1255Z"
                      fill="#e5ebff"
                    />{" "}
                  </g>
                </svg>
                <h3>Корзина пуста</h3>
                <p>Добавьте хотя бы один товар, чтобы сделать заказ</p>
                <button style={buttonOtherStyles} onClick={backToBuys} className="default_btn">
                  Перейти к покупкам
                </button>
              </div>
            )}
           </>)}
          </div>
        </div>
      ) : (
        <>
          <div className={`basket`}>
            {ordered ? (
              <div className="empty_basket" style={{ padding: "0 1rem" }}>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="150px"
                  height="150px"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#108778"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M6,2v46h25.07422c-0.551,-0.614 -1.04103,-1.282 -1.45703,-2h-21.61719v-42h34v24.17969c0.689,0.116 1.356,0.28958 2,0.51758v-26.69727zM13,11v2h24v-2zM13,25v2h4v-2zM20,25v2h17v-2zM40,30c-5.5,0 -10,4.5 -10,10c0,5.5 4.5,10 10,10c5.5,0 10,-4.5 10,-10c0,-5.5 -4.5,-10 -10,-10zM13,31v2h4v-2zM20,31v2h10.26758c0.529,-0.734 1.1355,-1.404 1.8125,-2zM40,32c4.4,0 8,3.6 8,8c0,4.4 -3.6,8 -8,8c-4.4,0 -8,-3.6 -8,-8c0,-4.4 3.6,-8 8,-8zM44.30078,35.40039l-5.40039,6.29883l-3.30078,-2.5l-1.19922,1.60156l4.69922,3.59961l6.70117,-7.70117zM13,37v2h4v-2zM20,37v2h8.05078c0.057,-0.686 0.1748,-1.352 0.3418,-2z"></path>
                    </g>
                  </g>
                </svg>
                <h3>Заказ #{orderList.length}  оформлен</h3>
                <p>Детали заказа можно посмотреть в разделе "Заказы"</p>
                <button onClick={goToOrders} className="default_btn">
                  Перейти к заказам
                </button>
              </div>
            ) : (
              <>
                {basketCatalog.length ? (
                  <>
                    <div className="basket_list">
                      {basketCatalog.map((el) => (
                        <BasketItem
                          removeItemFromBasket={removeItemFromBasket}
                          basketCatalog={basketCatalog}
                          incQty={incQty}
                          decQty={decQty}
                          key={el.id}
                          {...el}
                        />
                      ))}
                    </div>

                    <div className="basket_action">
                      <div className="">
                        <div className="basket_cost">
                          <div className="basket_cost_block">
                            <h4>Итого:</h4>
                            <span className="dashedBlock"></span>
                            <span>
                              {handleOrderPrice()}
                              руб.
                            </span>
                          </div>
                          <button onClick={createOrder} className="default_btn">
                            Оформить заказ
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="empty_basket" style={{ padding: "0 1rem" }}>
                    <svg
                      width="140px"
                      height="140px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#108778"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="#108778"
                        strokeWidth="0.384"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 1.25C11.3953 1.25 10.8384 1.40029 10.2288 1.65242C9.64008 1.89588 8.95633 2.25471 8.1049 2.70153L6.03739 3.78651C4.99242 4.33487 4.15616 4.77371 3.51047 5.20491C2.84154 5.65164 2.32632 6.12201 1.95112 6.75918C1.57718 7.39421 1.40896 8.08184 1.32829 8.90072C1.24999 9.69558 1.24999 10.6731 1.25 11.9026V12.0974C1.24999 13.3268 1.24999 14.3044 1.32829 15.0993C1.40896 15.9182 1.57718 16.6058 1.95112 17.2408C2.32632 17.878 2.84154 18.3484 3.51047 18.7951C4.15616 19.2263 4.99241 19.6651 6.03737 20.2135L8.10481 21.2984C8.95628 21.7453 9.64006 22.1041 10.2288 22.3476C10.8384 22.5997 11.3953 22.75 12 22.75C12.6047 22.75 13.1616 22.5997 13.7712 22.3476C14.3599 22.1041 15.0437 21.7453 15.8951 21.2985L17.9626 20.2135C19.0076 19.6651 19.8438 19.2263 20.4895 18.7951C21.1585 18.3484 21.6737 17.878 22.0489 17.2408C22.4228 16.6058 22.591 15.9182 22.6717 15.0993C22.75 14.3044 22.75 13.3269 22.75 12.0975V11.9025C22.75 10.6731 22.75 9.69557 22.6717 8.90072C22.591 8.08184 22.4228 7.39421 22.0489 6.75918C21.6737 6.12201 21.1585 5.65164 20.4895 5.20491C19.8438 4.77371 19.0076 4.33487 17.9626 3.7865L15.8951 2.70154C15.0437 2.25472 14.3599 1.89589 13.7712 1.65242C13.1616 1.40029 12.6047 1.25 12 1.25ZM8.7708 4.04608C9.66052 3.57917 10.284 3.2528 10.802 3.03856C11.3062 2.83004 11.6605 2.75 12 2.75C12.3395 2.75 12.6938 2.83004 13.198 3.03856C13.716 3.2528 14.3395 3.57917 15.2292 4.04608L17.2292 5.09563C18.3189 5.66748 19.0845 6.07032 19.6565 6.45232C19.9387 6.64078 20.1604 6.81578 20.3395 6.99174L17.0088 8.65708L8.50895 4.18349L8.7708 4.04608ZM6.94466 5.00439L6.7708 5.09563C5.68111 5.66747 4.91553 6.07032 4.34352 6.45232C4.06131 6.64078 3.83956 6.81578 3.66054 6.99174L12 11.1615L15.3572 9.48289L7.15069 5.16369C7.07096 5.12173 7.00191 5.06743 6.94466 5.00439ZM2.93768 8.30737C2.88718 8.52125 2.84901 8.76413 2.82106 9.04778C2.75084 9.7606 2.75 10.6644 2.75 11.9415V12.0585C2.75 13.3356 2.75084 14.2394 2.82106 14.9522C2.88974 15.6494 3.02022 16.1002 3.24367 16.4797C3.46587 16.857 3.78727 17.1762 4.34352 17.5477C4.91553 17.9297 5.68111 18.3325 6.7708 18.9044L8.7708 19.9539C9.66052 20.4208 10.284 20.7472 10.802 20.9614C10.9656 21.0291 11.1134 21.0832 11.25 21.1255V12.4635L2.93768 8.30737ZM12.75 21.1255C12.8866 21.0832 13.0344 21.0291 13.198 20.9614C13.716 20.7472 14.3395 20.4208 15.2292 19.9539L17.2292 18.9044C18.3189 18.3325 19.0845 17.9297 19.6565 17.5477C20.2127 17.1762 20.5341 16.857 20.7563 16.4797C20.9798 16.1002 21.1103 15.6494 21.1789 14.9522C21.2492 14.2394 21.25 13.3356 21.25 12.0585V11.9415C21.25 10.6644 21.2492 9.7606 21.1789 9.04778C21.151 8.76412 21.1128 8.52125 21.0623 8.30736L17.75 9.96352V13C17.75 13.4142 17.4142 13.75 17 13.75C16.5858 13.75 16.25 13.4142 16.25 13V10.7135L12.75 12.4635V21.1255Z"
                          fill="#e5ebff"
                        />{" "}
                      </g>
                    </svg>
                    <h3>Корзина пуста</h3>
                    <p>Добавьте хотя бы один товар, чтобы сделать заказ</p>
                    <button style={buttonOtherStyles} onClick={backToBuys} className="default_btn">
                      Перейти к покупкам
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export { Basket };
