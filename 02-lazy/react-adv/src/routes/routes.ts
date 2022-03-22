import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    path: '/shopping',
    to: 'shopping',
    Component: ShoppingPage,
    name: 'ShoppingPage',
  },
];
