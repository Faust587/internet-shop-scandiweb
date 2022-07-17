import {useSelector} from "react-redux";
import _ from "lodash";

export const useCart = () => {

  const productList = useSelector(state => state.cartReducer.productList);

  function addToCart(product) {
    let result = -1;
    productList.map((productItem, index) => {
      if (productItem.id === product.id && _.isEqual(productItem.selectedAttributes, product.selectedAttributes)) {
        // incrementCounter
      }
    });
  }

  return addToCart;
}
