import React from "react";
import { IAction } from "./actions";

export enum ViewMode {
  GRID = 'grid',
  LIST = 'list'
}

export type Product = {
  id: string,
  sku: string,
  name: string,
  retailPrice: number
}

export interface IAppState {
  products: Product[]
  selectedProduct?: Product,
  currentOrder: {
    items: { product: Product, qty: number }[],
    discountCode?: string
  }
  completeLoading: boolean,
  config: {
    offset: number
  }
}

export interface IAppContext {
  state: IAppState,
  dispatch: (action: IAction) => void,
}

export const defaultAppState: IAppState = {
  products: [],
  currentOrder: {
    items: [],
  },
  config: {
    offset: 50
  },
  completeLoading: false,
}

const AppContext = React.createContext<IAppContext>({ state: defaultAppState, dispatch: () => { console.log('intializing...') } });
export default AppContext;