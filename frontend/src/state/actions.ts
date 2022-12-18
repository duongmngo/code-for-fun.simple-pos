import { Product } from "./app-context"

export enum ActionTypes {
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
  SELECT_PRODUCT_ITEM = 'SELECT_PRODUCT_ITEM',
  CANCEL_SELECTED_PRODUCT = 'CANCEL_SELECTED_PRODUCT',
  ADD_SELECTED_PRODUCT = 'ADD_SELECTED_PRODUCT',
  CANCEL_ORDER = 'CANCEL_ORDER'
}

export interface ILOAD_PRODUCTS__PAYLOAD {
  products: Product[]
}

export interface ISELECT_PRODUCT_ITEM__PAYLOAD {
  product: Product
}

export interface IADD_SELECTED_PRODUCT__PAYLOAD {
  qty: number,
  product: Product
}
export interface IAction {
  type: ActionTypes,
  payload?: ILOAD_PRODUCTS__PAYLOAD | ISELECT_PRODUCT_ITEM__PAYLOAD | IADD_SELECTED_PRODUCT__PAYLOAD | any
}