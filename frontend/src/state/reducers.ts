import { ActionTypes, IAction } from "./actions";
import { defaultAppState, IAppState } from "./app-context";
import addSelectedProduct from './add-selected-product.reducer'

export default function reducers(state: IAppState, action: IAction): IAppState {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCTS: {
      return {
        ...state,
        products: action.payload.products
      }
    }
    case ActionTypes.SELECT_PRODUCT_ITEM: {
      return {
        ...state,
        selectedProduct: action.payload.product
      }
    }
    case ActionTypes.CANCEL_SELECTED_PRODUCT: {
      return {
        ...state,
        selectedProduct: undefined,
      }
    }
    case ActionTypes.ADD_SELECTED_PRODUCT: {
      return addSelectedProduct(state, action);
    }
    case ActionTypes.CANCEL_ORDER: {
      return {
        ...state, 
        currentOrder: defaultAppState.currentOrder
      }
    }
  }
  return state;
}