import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';

import { ProductCardProps } from '../interfaces';
import styles from '../styles/styles.module.css';
import { ProductContextProps } from '../interfaces/Product';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct(0);

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};