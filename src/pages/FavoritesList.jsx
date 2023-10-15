import { ShopItem } from "../components/ShopItem";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function FavoritesList(props) {
  const {
    favoritesList,
    basketCatalog = [],
    setFavoritesList = Function.prototype,
    setBasketCatalog = Function.prototype,
  } = props;

  const stylesEmptyFavorites = {
    
  }
  const stylesFavorites = {
    display:'flex',
    flexDirection:'row',
    columnGap:'clamp(1.5rem, 1.151rem + 1.349vw, 2.5rem)',
    flexWrap:'wrap',
    justifyContent:'stretch'
  }


  return (
    <motion.div
    className="container"
    initial={{ opacity:0.3 }} // начальное положение по горизонтали (левая граница экрана)
    animate={{  opacity:1 }}     // положение, к которому анимировать (нулевое смещение)
    exit={{  opacity: 0.3}}     // положение при выходе (левая граница экрана)
    transition={{  duration:0.75 , ease:'easeIn'}}
    >
    <div className="favorites" style={!(favoritesList.length) ?  { gap:'1.5rem', alignItems:'center', justifyContent:'space-evenly'} : null}>
        {!(favoritesList.length > 0) ? (
          <div className="empty">
            <svg
            style={{maxHeight:'clamp(20.813rem, 20.071rem + 2.867vw, 22.938rem)'}}
              className="favoritesSVG emptySVG"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXLink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="16 4 64 88"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path d="M80,23.6c0-0.2-0.1-0.3-0.2-0.5c0,0,0-0.1-0.1-0.1c-0.1-0.2-0.2-0.3-0.3-0.4l-18-18c-0.1-0.1-0.3-0.2-0.4-0.3    c0,0-0.1,0-0.1-0.1c-0.2-0.1-0.3-0.1-0.5-0.2c0,0,0,0,0,0c-0.1,0-0.2,0-0.4,0H18c-1.1,0-2,0.9-2,2v84c0,1.1,0.9,2,2,2h60    c1.1,0,2-0.9,2-2V24C80,23.9,80,23.7,80,23.6C80,23.6,80,23.6,80,23.6z M62,10.8L73.2,22H62V10.8z M20,88V8h38v16c0,1.1,0.9,2,2,2    h16v62H20z" />
                  <path d="M55.7,30c-2.8,0-5.6,1.2-7.7,3.3c-2.1-2.1-4.9-3.3-7.7-3.3c-2.8,0-5.5,1.2-7.4,3.4c-4,4.5-3.8,12.2,0.5,17l13.1,14.9    c0.4,0.4,0.9,0.7,1.5,0.7s1.1-0.2,1.5-0.7l13.1-14.9c0,0,0,0,0,0c4.3-4.8,4.5-12.5,0.5-17C61.2,31.2,58.6,30,55.7,30z M59.6,47.8    L48,61L36.4,47.8c-2.9-3.3-3.1-8.7-0.5-11.7c1.2-1.3,2.7-2,4.4-2c1.9,0,3.8,0.9,5.3,2.6l0.9,1.1c0.8,0.9,2.2,0.9,3,0l0.9-1.1    c1.4-1.6,3.4-2.6,5.3-2.6c1.7,0,3.2,0.7,4.4,2C62.8,39.1,62.6,44.4,59.6,47.8z" />
                </g>
              </g>
            </svg>{" "}
            <h3>Вы пока не добавили никаких закладок</h3>
            <Link to='/' className="default_btn">На главную
            </Link>
          </div>
        ) : (
          <>
          <h2 className="title" style={{marginBottom:'1rem'}}>Мои закладки</h2>
          
            
               <div style={favoritesList.length ? stylesFavorites : stylesEmptyFavorites}  className="shop_list"> 
               
               {favoritesList.map((el) => (
               <ShopItem
               key={el.id}
                 favoritesList={favoritesList}
                 basketCatalog={basketCatalog}
                 setFavoritesList={setFavoritesList}
                 setBasketCatalog={setBasketCatalog}
                 {...el}
               />
             ))}
             </div>
          </>
        )}
    </div>
    </motion.div>
  );
}
export { FavoritesList };
