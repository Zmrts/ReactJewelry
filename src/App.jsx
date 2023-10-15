

import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Home } from "./pages/Home";
import { FavoritesList } from "./pages/FavoritesList";
import { Basket } from "./components/Basket";
import "simplebar-react/dist/simplebar.min.css";
import { AnimatePresence} from "framer-motion";


import { createRef, useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation, } from "react-router-dom";
import { Orders } from "./pages/Orders";

function App() {
  const [catalog, setCatalog] = useState([]);
  const [isMobileSize, setisMobileSize] = useState();
  const [isOpenBasket, setOpenBasket] = useState(false);
  const [basketCatalog, setBasketCatalog] = useState([]); //local storage
  const [favoritesList, setFavoritesList] = useState([]); //local storage
  const [isLoading, setIsLoading] = useState(true);
  const [orderList, setOrderList] = useState([]); //local storage
  const [orderPrice, setOrderPrice] = useState(0);




 

  useEffect(() => {
    const storedData = localStorage.getItem('shopData');
    if (storedData) {
      const data = JSON.parse(storedData);
      setBasketCatalog(data.basketCatalog);
      setFavoritesList(data.favoritesList);
      setOrderList(data.orderList);
    }
  }, [])


  useEffect(() => {
    const dataToSave = {
      favoritesList,
      basketCatalog,
      orderList,
    }
    localStorage.setItem('shopData', JSON.stringify(dataToSave))

  },[favoritesList, basketCatalog, favoritesList]);


  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 766px)').matches) {
        setisMobileSize(true);
      } else {
        setisMobileSize(false);
      }
    };

    // Инициализация размера экрана
    handleResize();

    // Добавление слушателя события изменения размера экрана
    window.addEventListener('resize', handleResize);
  }, [])


  const {pathname} = useLocation();




  const checkScrollWidth = () => {
    let div = document.createElement("div");
    div.style.overflowY = "scroll";
    div.style.width = "50px";
    div.style.height = "50px";
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove()
    return scrollWidth;
  };
  
  const togglePadding = (state) => {
    const body = document.body;
    if (state) {   
      body.style.maxHeight = '100vh'
      body.style.overflowY = 'hidden'
      body.style.paddingRight = `${checkScrollWidth()}px`
    } else {
      body.style.maxHeight = '';
      body.style.overflowY = 'scroll';
      body.style.paddingRight = '';
    }
  }

  useEffect(() => {
    togglePadding(isOpenBasket);
  }, [isOpenBasket])

  

  const handleOrderPrice = () => {
    const result = basketCatalog.reduce((totalPrice, el) => {
      totalPrice += el.price * el.quantity;
      return totalPrice;
    }, 0);
    setOrderPrice(result);
    return result;
  };

  const refShop = useRef(null);

  const scrollToCatalog = (timeBeforeScroll) => {
    if (!isMobileSize) toggleBasket();
    setTimeout(() => {
      if (refShop.current) {
        refShop.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, timeBeforeScroll);

  }


  const removeItemFromBasket = (img, basketItem) => {
    if (isOpenBasket) {
      basketItem.style.opacity = '0';
      basketItem.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        setBasketCatalog(basketCatalog.filter((item) => !(item.image === img)));
      }, 300);
    } else {
      setBasketCatalog(basketCatalog.filter((item) => !(item.image === img)));
    }
  };

  const openBasket = () => {
    const basket = document.querySelector('.basket');
    setOpenBasket(true); 
    setTimeout(() => {
      basket.classList.add('basketOpened')
    }, 50);
    
  }
  const closeBasket = (evt) => {

    const basket = document.querySelector('.basket');
    basket.classList.remove('basketOpened')
    setTimeout(() => {
      setOpenBasket(false);
    }, 100);
  }
  const toggleBasket = () => {
    setOpenBasket(!isOpenBasket);
  };

  return (<>
      {!isMobileSize && <Basket
        orderList={orderList}
        setOrderList={setOrderList}
        scrollToCatalog={scrollToCatalog}
        removeItemFromBasket={removeItemFromBasket}
        basketCatalog={basketCatalog}
        closeBasket={closeBasket}
        setBasketCatalog={setBasketCatalog}
        handleOrderPrice={handleOrderPrice}
        isOpenBasket={isOpenBasket}
      /> }
      

    <div className="wrapper">

      <Header
        openBasket={openBasket}
        isOpenBasket={isOpenBasket}
        orderPrice={orderPrice}
        handleOrderPrice={handleOrderPrice}
        basketCatalog={basketCatalog}
        pathname={pathname}
        checkScrollWidth={checkScrollWidth}
        togglePadding={togglePadding}
      />
      <div className='main'>
      <AnimatePresence>
        <Routes >
          <Route
            path='/'
            exact
            element={
              <Home
                refShop={refShop}
                basketCatalog={basketCatalog}
                favoritesList={favoritesList}
                setFavoritesList={setFavoritesList}
                setBasketCatalog={setBasketCatalog}
                catalog={catalog}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setCatalog={setCatalog}

               />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesList
                basketCatalog={basketCatalog}
                favoritesList={favoritesList}
                setFavoritesList={setFavoritesList}
                setBasketCatalog={setBasketCatalog}
              />
            }
          />

          <Route
            path="/orders"
            element={
              <Orders
                orderList={orderList}
              />
            }
          />
          {isMobileSize && <Route path="/basket" element={<Basket
        orderList={orderList}
        setOrderList={setOrderList}
        scrollToCatalog={scrollToCatalog}
        removeItemFromBasket={removeItemFromBasket}
        basketCatalog={basketCatalog}
        closeBasket={closeBasket}
        setBasketCatalog={setBasketCatalog}
        handleOrderPrice={handleOrderPrice}
        isOpenBasket={isOpenBasket}
      />}/>}
        </Routes>
        </AnimatePresence>
      </div>
      <Footer />

    </div>
  </>
  );
}

export default App;
