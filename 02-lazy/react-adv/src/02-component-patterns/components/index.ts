import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/Product';
import { ProductCard as ProductCardHOC } from './ProductCard';
export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
// export { ProductCard } from './ProductCard';
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
