import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

export const product = {
  id: '1',
  title: 'Coffe',
  img: '/coffee-mug.png',
};

const App = () => {
  return (
    <>
      <ProductCard product={product} initialValues={{ count: 0, maxCount: 10 }}>
        {({ reset, increaseBy, isMaxCountReached, maxCount, count }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(+2)}>+2</button>
            )}
            <span>
              {count} - {maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
