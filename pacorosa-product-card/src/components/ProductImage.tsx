import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';
import noImg from '../assets/no-image.jpg';
import { ProductImageProps } from '../interfaces/Product';
import React from 'react';

export const ProductImage = ({ img = '', className }: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow = img ? img : product.img ?? noImg;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Coffe Mug"
    />
  );
};
