import { findIndex } from "lodash";
import { IAction } from "./actions";
import { IAppState } from "./app-context";

export default function addSelectedProduct(state: IAppState, action: IAction): IAppState {
  const isAddedItem = findIndex(state.currentOrder.items, it => it.product.id === action.payload.product.id) >= 0;
  return {
    ...state,
    selectedProduct: undefined,
    currentOrder: {
      ...state.currentOrder,
      items: !isAddedItem ? [...state.currentOrder.items, action.payload] : state.currentOrder.items.map(it => {
        if (it.product.id !== action.payload.product.id) return it;
        return {
          ...it,
          qty: it.qty + action.payload.qty
        }
      })
    }
  }
}