import { useState, useEffect,} from "react";

import { ShopList } from "../components/ShopList";
import { Slider } from "../components/Slider";
import { datalist } from "../api";
import MyLoader from "../components/ContentLoader";

import {motion} from 'framer-motion'
import { useSearchParams } from "react-router-dom";

function Home(props) {
  const {
    catalog = [],
    basketCatalog = [],
    favoritesList = [],
    setFavoritesList = Function.prototype,
    setBasketCatalog = Function.prototype,
    setCatalog = Function.prototype,
    setIsLoading = Function.prototype,
    isLoading,
    refShop,

  } = props;



 
  const [search, setSearch] = useState("");
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchReq, setSearchReq] = useState(null);
  const [showSearchRequest, setShowSearchRequest] = useState(false);
  const loadingArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    if (searchQuery.length) {

    }
    const time = Math.round((Math.random() * 10000) / 3);
    setTimeout(() => {
      getGoods();
    }, time);

  }, [catalog]);

  const getGoods = () => {
    setCatalog(datalist);
    setIsLoading(false);
  };



  useEffect(() => {
    if (catalog.length) {
      setFilteredCatalog(catalog);
    }
  } , [catalog])

 
  const handleSearchParams = () => {
    const params = {};
    if (search.length) params.search = search;
    setSearchParams(params);
  }

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleSearch = () => {
    if (search) {
      setSearchReq(search);
      handleSearchParams();
      setShowSearchRequest(true);
    } else {
      setShowSearchRequest(false);
    }
    setFilteredCatalog(
      catalog.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
   
    
  }
  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      handleSearch();
    }
  };
  const clearSearchInput = () => {
    setSearch("");
    setFilteredCatalog(catalog);
    setShowSearchRequest(false);
    setSearchParams({});
  };



  return (
    <motion.div
    initial={{ opacity:0.3 }} // начальное положение по горизонтали (левая граница экрана)
    animate={{  opacity:1 }}     // положение, к которому анимировать (нулевое смещение)
    exit={{  opacity: 0.3}}     // положение при выходе (левая граница экрана)
    transition={{  duration:0.75 , ease:'easeIn'}}
    >
      <Slider />
      <div ref={refShop} className="container">
        <div  style={!showSearchRequest ? {marginBottom:'3vh'} : null} className="search">
          <h2 className="title">Каталог</h2>

          <div className="search_field">
            <button className="btn_search" style={{ background: "none" }}>
              <img width={20} height={20} src={process.env.PUBLIC_URL + '/img/search.png'} alt="search" />
            </button>
            <input
              type="text"
              placeholder="Поиск..."
              value={search}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            {!search.length ? null : (
              <button onClick={clearSearchInput} className="clear_search_btn">
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
                  />{" "}
                </svg>{" "}
              </button>
            )}
          </div>
        </div>
        {showSearchRequest ? (
          <p className="search_request">Поиск по запросу '{searchReq}'</p>
        ) : null}
        <div className="shop" >
          
          <div className="shop_list" >
            {isLoading ? (
              loadingArray.map((el, index) => <MyLoader key={index} />)
            ) : ( filteredCatalog.length 
              ? ( <ShopList
                catalog={catalog}
                search={search}
                basketCatalog={basketCatalog}
                favoritesList={favoritesList}
                setBasketCatalog={setBasketCatalog}
                setFavoritesList={setFavoritesList}
                filteredCatalog={filteredCatalog}
                isLoading={isLoading}
              />)
              : ( <div className="noResults">
              <svg style={{width:'20vh'}}
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 507 511.92"
              >
                  <path fill="#108778" d="M223.36 0c61.68 0 117.53 25 157.95 65.43 40.42 40.42 65.42 96.26 65.42 157.94 0 45.12-13.39 87.13-36.4 122.25L507 450.99l-66.66 60.93-93.23-102.58c-35.42 23.62-77.98 37.39-123.75 37.39-61.67 0-117.52-25-157.94-65.42C25 340.88 0 285.04 0 223.36c0-61.67 25-117.52 65.42-157.94S161.69 0 223.36 0zm59.55 136.89 25.81 25.99-59.78 60.5 59.83 60.56-25.9 25.79-59.48-60.19-59.57 60.3-25.8-25.99 59.77-60.51-59.83-60.56 25.9-25.79 59.48 60.19 59.57-60.29zm80.78-53.84c-35.91-35.91-85.53-58.13-140.33-58.13-54.8 0-104.41 22.22-140.32 58.13-35.91 35.91-58.12 85.51-58.12 140.31s22.21 104.42 58.12 140.32c35.91 35.92 85.52 58.12 140.32 58.12s104.42-22.2 140.33-58.12c35.91-35.9 58.11-85.51 58.11-140.32 0-54.8-22.2-104.4-58.11-140.31z" />
              </svg>
              <h2>Ничего не найдено</h2>
              <button onClick={clearSearchInput} className="backBtn">Вернуться</button>
              </div>)
              
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export { Home };
