import { ShopItem } from "./ShopItem";

function ShopList(props) {
  const {
    basketCatalog = [],
    favoritesList,
    setFavoritesList = Function.prototype,
    setBasketCatalog = Function.prototype,
    filteredCatalog = [],
    isLoading = false,
  } = props;




  return (
    <>
      {filteredCatalog.map((el) => (
        <ShopItem
          isLoading={isLoading}
          basketCatalog={basketCatalog}
          favoritesList={favoritesList}
          setFavoritesList={setFavoritesList}
          setBasketCatalog={setBasketCatalog}
          key={el.id}
          {...el}
        />
      ))}
    </>
  );
}

export { ShopList };
