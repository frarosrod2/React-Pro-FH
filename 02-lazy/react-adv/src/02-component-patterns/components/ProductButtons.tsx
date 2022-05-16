import { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import { ProductButtonsProps } from '../interfaces/Product';

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const maxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${maxReached() && styles.disabled}`}
        onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
