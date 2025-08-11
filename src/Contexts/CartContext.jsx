import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helpers/sumProducts";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      // returning the new state at last//imitate initialState

      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };
    case "INCREASE":
      const increaseIndex = state.selectedItems.findIndex(
        (product) => product.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "DECREASE":
      const decreaseIndex = state.selectedItems.findIndex(
        (product) => product.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (product) => product.id !== action.payload.id
      );
      return {
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
        checkout: false,
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    default:
      throw new Error("Invalid Action!");
  }
};

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

//creating custom hook
const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
