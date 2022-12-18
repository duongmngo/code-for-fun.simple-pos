import React, { useContext, useEffect, useState } from 'react';
import { ActionTypes } from '../../state/actions';
import AppContext from '../../state/app-context';
import styles from './styles.module.css';



function QuantityAdjust() {
  const { state: { selectedProduct }, dispatch } = useContext(AppContext);
  let [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(1);
  }, [selectedProduct])

  const onClickCancelHandler = () => {
    dispatch({ type: ActionTypes.CANCEL_SELECTED_PRODUCT })
  }

  const onClickAddHandler = () => {
    dispatch({ type: ActionTypes.ADD_SELECTED_PRODUCT, payload: { qty, product: selectedProduct } })
  }

  if (!selectedProduct) return null;

  return (
    <div className={styles.container}>
      <div className={styles.leftControls}>
        <button onClick={() => { qty > 1 && setQty(--qty) }} disabled={qty === 1}>-</button>
        <span>{qty}</span>
        <button onClick={() => { setQty(++qty) }}>+</button>
      </div>
      <div className={styles.name}>{selectedProduct.name}</div>
      <div className={styles.rightControls}>
        <button onClick={onClickCancelHandler}>Cancel</button>
        <button onClick={onClickAddHandler}>Add</button>
      </div>
    </div>

  );
}

export default QuantityAdjust;
