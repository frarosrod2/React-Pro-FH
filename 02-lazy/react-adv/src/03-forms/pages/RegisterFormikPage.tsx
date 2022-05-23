import { Form, Formik } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'El nombre debe tener tres caracteres o más')
            .required('Requerido'),
          email: Yup.string().email('Revise el formato del correo').required('Requerido'),
          password1: Yup.string()
            .min(6, 'La contraseña debe tener seis caracteres o más')
            .required('Requerido'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
            .required('Requerido'),
        })}>
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Nombre" name="name" placeholder="Fernando" />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="jhon@google.com"
            />
            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="Password"
            />
            <MyTextInput
              label="Repeat password"
              name="password2"
              type="password"
              placeholder="Repeat password"
            />
            <button type="submit">Create</button>
            <button onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
