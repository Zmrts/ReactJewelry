import { useEffect} from "react";
import { Link} from "react-router-dom";
import { BurgerMenu } from "../components/BuregerMenu";



function Header(props) {
  const {
    openBasket = Function.prototype,
    orderPrice,
    handleOrderPrice = Function.prototype,
    basketCatalog,
    pathname,
    togglePadding,
    isOpenBasket,
  } = props;



  useEffect(() => {
    if (pathname !== '/') {
      document.querySelector('.header').style.borderBottom = '2px solid #108778'
    } else {
      document.querySelector('.header').style.borderBottom = 'none'
    }
  }, [pathname])

  useEffect(() => {
    handleOrderPrice();
  }, [basketCatalog]);

  return (
    <div className="header">
      <div className="header_left">
        <Link to={"/"} className="logo">
          <svg
            width="60"
            height="55"
            viewBox="0 0 40 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38 12.6667L30.8 2H9.2L2 12.6667M38 12.6667L20 34L2 12.6667M38 12.6667H2M18.2 2L12 12.6667L20 32.2222L28 12.6667L21.8 2"
              stroke="url(#paint0_linear_161209_1413)"
              strokeWidth="3"
            />
            <defs>
              <linearGradient
                id="paint0_linear_161209_1413"
                x1="20"
                y1="-3.33333"
                x2="20"
                y2="41.1111"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0287134" stopColor="#17A098"/>
                <stop offset="1" stopColor="#065F48" />
              </linearGradient>
            </defs>
          </svg>
        </Link>

        <div className="header_title_box">
          <h2 className="header_title">REACT JEWELRY</h2>
          <p>
            Магазин ювелирных изделий
          </p>
        </div>
      </div>

      <div className="header_right">
        <button style={{background:'none'}} onClick={openBasket} className="header_right_item">
            <svg
              width="23"
              height="23"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
                stroke="#9B9B9B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
                stroke="#9B9B9B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                stroke="#9B9B9B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="price">{orderPrice} руб.</span>
        </button>
        <Link className="header_right_item" to={"favorites"}  style={{display:'flex', gap:'3px'}}>
          <svg
            width="29"
            height="22"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_60_590)">
              <path
                d="M16.4514 0C18.2261 0 19.7168 0.578231 20.9236 1.73469C22.1304 2.89116 22.7338 4.30272 22.7338 5.96939C22.7338 6.78572 22.5563 7.61055 22.2014 8.44388C21.8464 9.27721 21.456 10.017 21.0301 10.6633C20.6042 11.3095 19.8854 12.1429 18.8738 13.1633C17.8623 14.1837 17.0104 15.0085 16.3183 15.6378C15.6262 16.267 14.517 17.2279 12.9907 18.5204L11.3403 19.949L9.68981 18.5714C8.19907 17.2449 7.09877 16.267 6.38889 15.6378C5.67901 15.0085 4.81829 14.1837 3.80671 13.1633C2.79514 12.1429 2.07639 11.3095 1.65046 10.6633C1.22454 10.017 0.842978 9.27721 0.505787 8.44388C0.168596 7.61055 0 6.78572 0 5.96939C0 4.30272 0.603395 2.89116 1.81019 1.73469C3.01698 0.578231 4.48997 0 6.22917 0C8.28781 0 9.99151 0.765306 11.3403 2.29592C12.689 0.765306 14.3927 0 16.4514 0ZM11.4468 16.9388C13.186 15.4422 14.4549 14.3282 15.2535 13.5969C16.0521 12.8656 16.9306 11.9898 17.8889 10.9694C18.8472 9.94898 19.5127 9.05612 19.8854 8.29082C20.2581 7.52551 20.4444 6.7517 20.4444 5.96939C20.4444 4.88095 20.0629 3.97959 19.2998 3.26531C18.5366 2.55102 17.5872 2.19388 16.4514 2.19388C15.5995 2.19388 14.7921 2.43197 14.0289 2.90816C13.2658 3.38435 12.7245 3.9966 12.4051 4.7449H10.2755C9.99151 3.9966 9.46798 3.38435 8.70486 2.90816C7.94174 2.43197 7.11651 2.19388 6.22917 2.19388C5.09336 2.19388 4.15278 2.55102 3.40741 3.26531C2.66204 3.97959 2.28935 4.88095 2.28935 5.96939C2.28935 6.7517 2.46682 7.52551 2.82176 8.29082C3.1767 9.05612 3.84221 9.94898 4.81829 10.9694C5.79437 11.9898 6.68171 12.8656 7.48032 13.5969C8.27893 14.3282 9.53009 15.4422 11.2338 16.9388L11.3403 17.0408L11.4468 16.9388Z"
                fill="#9B9B9B"
              />
            </g>
            <defs>
              <clipPath id="clip0_60_590">
                <rect width="23" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>Закладки</span>
        </Link>
        <Link to='/orders' className="header_right_item" href="#" >
          <svg
            width="25"
            height="25"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z"
              fill="#9B9B9B"
            />
          </svg>
          <span>Заказы</span>
        </Link>
      </div>
      <BurgerMenu isOpenBasket={isOpenBasket} 
      openBasket={openBasket} 
      togglePadding={togglePadding} />
    </div>
  );
}

export { Header };
