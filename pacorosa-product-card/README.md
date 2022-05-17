# Product-Card

Este es un paquete de pruebas de despliegue en NPM

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'pacorosa-product-card';

```

```
 <ProductCard
          product={product}
          initialValues={{ count: 0, maxCount: 10 }}
        >
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
```
