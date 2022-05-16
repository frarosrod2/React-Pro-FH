import { ProductCard, ProductImage, ProductTitle } from '../components';
import { ProductButtons } from '../components/ProductButtons';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products.data';

const product = products[0];

export const ShoppingPage = () => {
  const { products, shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingStore</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white"
          initialValues={{ count: 0, maxCount: 10 }}>
          {({ reset, increaseBy, isMaxCountReached, maxCount, count }) => (
            <>
              <ProductImage className="custom-img" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>}
              <span>
                {count} - {maxCount}
              </span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
