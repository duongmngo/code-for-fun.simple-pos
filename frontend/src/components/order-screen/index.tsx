import React, { useContext, useEffect, useState } from 'react';
import graphQLClient from '../../clients/graphql';
import { ActionTypes } from '../../state/actions';
import AppContext from '../../state/app-context';
import styles from './styles.module.css'

function OrderScreen() {
  const { state: { currentOrder }, dispatch } = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const isNoItems = currentOrder.items.length === 0;

  const onCancelOrder = () => {
    dispatch({ type: ActionTypes.CANCEL_ORDER })
  }

  const onCheckoutOrder = () => {
    graphQLClient.checkout(currentOrder).then((data) => {
      dispatch({ type: ActionTypes.CANCEL_ORDER });
      window.alert(`Create order successfully: ${JSON.stringify(data)}`)
    });
  }

  useEffect(() => {
    if (currentOrder.items.length === 0) return;
    graphQLClient.calcualteTotalPrice(currentOrder).then(price => setTotalPrice(price));
  }, [currentOrder])
  return (
    <div className={styles.container}>
      {isNoItems && (<div className={styles.noItems}>No items</div>)}
      {!isNoItems && (
        <div className={styles.itemsContainer}>
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty</th>
                  <th>Each</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {currentOrder.items.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.product.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.product.retailPrice}</td>
                    <td>{item.product.retailPrice * item.qty}</td>
                  </tr>
                ))}

              </tbody>
            </table>
            <div>
              <span id='totalPrice'>Total: ${totalPrice}</span>
            </div>
          </div>
          <div className={styles.controlsContainer}>
            <button onClick={onCancelOrder}>Cancel</button>
            <button onClick={onCheckoutOrder}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderScreen;
