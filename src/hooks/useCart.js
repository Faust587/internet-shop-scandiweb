import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {cartSlice} from "../store/reducers/cartSlice";

export const useCart = () => {

  const dispatch = useDispatch();
  const {addProductToCart, incrementProductCounter, decrementProductCounter, clearCart} = cartSlice.actions;
  const productList = useSelector(state => state.cartReducer.productList);
  const currencyId = useSelector(state => state.currencyReducer.currencyId);

  function addToCart(product) {
    const sameProducts = productList.filter(({id}) => {
      return id === product.id
    });
    if (sameProducts.length !== 0) {
      let isClear = true;
      sameProducts.map(({chosenAttributes}, index) => {
        if (_.isEqual(chosenAttributes, product.chosenAttributes)) {
          dispatch(incrementProductCounter(index));
          isClear = false;
        }
      });
      if (isClear) dispatch(addProductToCart(product));
    } else {
      dispatch(addProductToCart(product));
    }
  }

  function getProductAmount () {
    if (productList.length === 0) return 0;

    let counter = 0;
    productList.map(({amount}) => counter += amount);
    return counter;
  }

  function clearProductCart () {
    dispatch(clearCart());
  }

  function getTotalAmount () {
    let totalAmount = 0;
    productList.map(({prices, amount}) => {
      totalAmount += prices[currencyId].amount * amount;
    });
    return `${totalAmount.toFixed(2)}`;
  }

  function incrementProductAmount({productId, attributes}) {
    productList.forEach(({id, chosenAttributes}, index) => {
      if (id === productId && _.isEqual(chosenAttributes, attributes)) {
        dispatch(incrementProductCounter(index));
      }
    });
  }

  function decrementProductAmount({productId, attributes}) {
    productList.forEach(({id, chosenAttributes}, index) => {
      if (id === productId && _.isEqual(chosenAttributes, attributes)) {
        dispatch(decrementProductCounter(index));
      }
    });
  }

  return {addToCart, getProductAmount, getTotalAmount, incrementProductAmount, decrementProductAmount, clearProductCart};
}
