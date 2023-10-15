import { useLocation } from "react-router-dom";
import MyLoader from "./ContentLoader";
import { LikeSvg } from "./LikeSvg";
import { PlusSvg } from "./PlusSvg.jsx";

import { useEffect, useRef, useState } from "react";

function ShopItem(props) {
  const {
    id,
    title,
    image,
    price,
    basketCatalog = [],
    favoritesList,
    setFavoritesList = Function.prototype,
    setBasketCatalog = Function.prototype,
  } = props;

  const [isClicked, setClicked] = useState(false);
  const [isPlusClicked, setPlusClicked] = useState(false);
  const {pathname} = useLocation();
  const shopItemRef = useRef();
 const shopItemElement = shopItemRef.current;

  const addItemToBasket =
    (item) =>
    (evt) => {
      const {title, image, price, id} = item;
      evt.preventDefault();
      if (basketCatalog.find((el) => el.image === image)) {
        setBasketCatalog(basketCatalog.filter((el) => el.image !== image));
        setPlusClicked(false);
      } else {
        const startQty = 1; 
        setBasketCatalog([...basketCatalog, {id, title, price, image, quantity: startQty }]);
        setPlusClicked(true);
      }
    };

  const addItemToFavorites =
    (item) =>
    (evt) => {
      evt.preventDefault();


      if (favoritesList.find((el) => el.image === item.image)) {
        if (pathname === '/favorites') {
          shopItemElement.style.opacity = '0'
          shopItemElement.style.transform = 'translateY(-100%)';
          setTimeout(() => {
            setFavoritesList(favoritesList.filter((el) => el.image !== item.image));
            setClicked(false);
          
          }, 310);
        } else {
          setFavoritesList(favoritesList.filter((el) => el.image !== item.image));
        setClicked(false);
        }
      } 
      else {
        setFavoritesList((prevState) => [
          ...prevState,
          item,
        ]);
        setClicked(true);
      }
    };

  useEffect(() => {
    if (basketCatalog.find((el) => el.image === image)) {
      setPlusClicked(true);
    } else {
      setPlusClicked(false);
    }
  }, [basketCatalog]);

  useEffect(() => {
    if (favoritesList.find((el) => el.image === image)) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [favoritesList]);
  return  (
    <div ref={shopItemRef} className="shop_item">
      <div className="shop_img">
        <a
          className="btn like"
          onClick={addItemToFavorites({ title, price, image, id})}
        >
          <LikeSvg isClicked={isClicked} />
        </a>
        <img src={image} alt={title} />
      </div>
      <p className="shop_item_description">{title}</p>
      <div className="card_action">
        <div className="card_price">
          <span className="fw4 inter">Цена:</span>
          <p className="fw7 inter">{price} руб.</p>
        </div>
        <a
          className="btn add"
          onClick={addItemToBasket({ title, price, image, id})}
          href="#">
          <PlusSvg isPlusClicked={isPlusClicked} />
        </a>
      </div>
    </div>
  );
}

export { ShopItem };
