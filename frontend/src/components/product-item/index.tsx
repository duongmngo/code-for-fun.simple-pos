import { Product } from '../../state/app-context';
import styles from './styles.module.css'

interface IProductItemProps {
  product: Product,
  onSelect?: (p: Product) => void
}

function ProductItem({ product, onSelect }: IProductItemProps) {
  return (
    <div className={styles.container} onClick={() => onSelect && onSelect(product)}>{product.name}</div>
  );
}

export default ProductItem;
