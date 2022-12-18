import React, { useEffect, useReducer, useState } from 'react';
import styles from './App.module.css';
import { ApolloProvider } from "@apollo/client";
import client from './apollo-client'
import AppContext, { defaultAppState } from './state/app-context';
import reducers from './state/reducers';
import OrderScreen from './components/order-screen';
import ProductList from './components/product-list';
import graphQLClient from './clients/graphql';
import { ActionTypes } from './state/actions';

function App() {

  const [hasMounted, setHasMounted] = useState(false);
  const [appState, dispatch] = useReducer(reducers, {}, () => defaultAppState);
  useEffect(() => {
    setHasMounted(true);
  }, [])

  useEffect(() => {
    if (!hasMounted) return;
    const getInitialData = async () => {
      const products = await graphQLClient.getProducts(0, 50);
      dispatch({ type: ActionTypes.LOAD_PRODUCTS, payload: { products } })
    }
    getInitialData();
  }, [hasMounted]);

  return (
    <ApolloProvider client={client}>
      <AppContext.Provider value={{ state: appState, dispatch }}>
        <div className={styles.app}>
          <OrderScreen />
          <ProductList />
        </div>
      </AppContext.Provider>
    </ApolloProvider >
  );
}

export default App;
