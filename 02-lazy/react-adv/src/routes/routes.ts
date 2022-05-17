type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}
export const routes: Route[] = [];
