import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';
import { FormikAbstraction } from '../03-forms/pages/FormikAbstraction';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}
export const routes: Route[] = [
  {
    to: '/',
    name: 'Register',
    component: RegisterPage,
    path: '/',
  },
  {
    to: '/formik-basic',
    name: 'Formik Basic',
    component: FormikBasicPage,
    path: '/formik-basic',
  },
  {
    to: '/formik-yup',
    name: 'Formik Yup',
    component: FormikYupPage,
    path: '/formik-yup',
  },
  {
    to: '/formik-components',
    name: 'Formik components',
    component: FormikComponents,
    path: '/formik-components',
  },
  {
    to: '/formik-abstraction',
    name: 'Formik abstraction',
    component: FormikAbstraction,
    path: '/formik-abstraction',
  },
];
