import { ProductCard, ProductImage, ProductTitle } from '../components';
import { ProductButtons } from '../components/ProductButtons';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products.data';

const product = products[0]

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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}>
            <ProductImage className="custom-img" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      {/* <input value={counter} onChange={(e) => } /> */}

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, productInCart]) => {
          return (
            <ProductCard
              key={key}
              product={productInCart}
              className="bg-dark"
              style={{ width: '100px' }}
              onChange={onProductCountChange}
              value={productInCart.count}>
              <ProductImage className="custom-img" />
              <ProductTitle title={`${productInCart.count}`} />
              <ProductButtons
                className="custom-buttons"
                style={{ display: 'flex', justifyContent: 'center' }}
              />
            </ProductCard>
          );
        })}
      </div>
    </div>
  );
};
