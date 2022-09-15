import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {cartSlice} from "../store/reducers/cartSlice";
import {productType} from "../types";

export type productListSelectorType = {
  cartReducer: {
    productList: productType[]
  }
}

export type currencyIdSelectorType = {
  currencyReducer: {
    currencyId: number
  }
}

export const useCart = () => {

  const dispatch = useDispatch();
  const {addProductToCart, incrementProductCounter, decrementProductCounter, clearCart} = cartSlice.actions;
  const productList: productType[] = useSelector((state: productListSelectorType) => state.cartReducer.productList);
  const currencyId: number = useSelector((state: currencyIdSelectorType) => state.currencyReducer.currencyId);

  function addToCart(product: productType) {
    const sameProducts = productList.filter(({id}) => {
      return id === product.id
    });
    if (sameProducts.length !== 0) {
      let isClear = true;
      sameProducts.forEach(({chosenAttributes}, index) => {
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
    productList.forEach(({prices, amount}) => {
      totalAmount += prices[currencyId].amount * amount;
    });
    return `${totalAmount.toFixed(2)}`;
  }

  function incrementProductAmount({productId, attributes}: {productId: string, attributes: number[]}) {
    productList.forEach(({id, chosenAttributes}, index) => {
      if (id === productId && _.isEqual(chosenAttributes, attributes)) {
        dispatch(incrementProductCounter(index));
      }
    });
  }

  function decrementProductAmount({productId, attributes}: {productId: string, attributes: number[]}) {
    productList.forEach(({id, chosenAttributes}, index) => {
      if (id === productId && _.isEqual(chosenAttributes, attributes)) {
        dispatch(decrementProductCounter(index));
      }
    });
  }

  return {
    addToCart,
    getProductAmount,
    getTotalAmount,
    incrementProductAmount,
    decrementProductAmount,
    clearProductCart
  };
}
