import { ProductCard, ProductImage, ProductTitle } from "../components";
import { ProductButtons } from '../components/ProductButtons';

const product = {
  id: '1',
  title: 'Coffe',
  img: '/coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingStore</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}></div>
      <ProductCard product={product}>
        {/* <ProductCard.Image />
        <ProductCard.Title title={''} />
        <ProductCard.Buttons
          counter={0}
          increaseBy={function (value: number): void {
            throw new Error('Function not implemented.');
          }}
        /> */}
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </ProductCard>
    </div>
  );
};
