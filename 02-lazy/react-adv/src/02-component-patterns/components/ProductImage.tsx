import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';
import noImg from '../assets/no-image.jpg';

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(ProductContext);
  let imgToShow = img ? img : product.img ?? noImg;

  return <img className={styles.productImg} src={imgToShow} alt="Coffe Mug" />;
};
