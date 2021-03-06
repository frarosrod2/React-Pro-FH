import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import { ProductTitleProps } from '../interfaces/Product';

export const ProductTitle = ({ title = '', className }: ProductTitleProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title ?? ''}
    </span>
  );
};
