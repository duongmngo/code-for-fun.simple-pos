import { useContext } from 'react';
import { ActionTypes } from '../../state/actions';
import AppContext, { Product } from '../../state/app-context';
import ProductItem from '../product-item';
import QuantityAdjust from '../quantity-adjust';
import styles from './styles.module.css';

function ProductList() {
  const { state: { products, selectedProduct }, dispatch } = useContext(AppContext);
  const onSelectProductHandler = (p: Product) => {
    dispatch({ type: ActionTypes.SELECT_PRODUCT_ITEM, payload: { product: p } })
  }

  return (
    <div className={styles.container}>
      {selectedProduct && <QuantityAdjust />}

      <div className={styles.productListContainer}>
        {products.map(p => <ProductItem key={p.id} product={p} onSelect={onSelectProductHandler} />)}
      </div> 
    </div>

  );
}

export default ProductList;
