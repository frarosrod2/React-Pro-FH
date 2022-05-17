// import * as React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductTitle } from '../../src/components';
import { products1 } from '../../src/data/products.data';

describe('Product Title', () => {
  it('Mostrar componente con nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard  product={products1}>
        {() => <ProductTitle />}
      </ProductCard>
    );
    console.log(wrapper.toJSON());
  });
});
