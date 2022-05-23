import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';
import {
  FormikBasicPage,
  FormikAbstraction,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
} from '../03-forms/pages';
import { DynamicForms } from '../03-forms/pages/DynamicForms';

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
  {
    to: '/formik-register',
    name: 'Formik Register',
    component: RegisterFormikPage,
    path: '/formik-register',
  },
  {
    to: '/dynamic-form',
    name: 'Dynamic Form',
    component: DynamicForms,
    path: '/dynamic-form',
  },
];
