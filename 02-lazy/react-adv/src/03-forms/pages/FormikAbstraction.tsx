import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import { MyCheckbox, MyTextInput, MySelect } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('El nombre es requerido'),
          lastName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('El apellido es requerido'),
          email: Yup.string()
            .email('Email no tiene un formato válido')
            .required('El email es requerido'),
          terms: Yup.boolean().oneOf([true], 'Debe aceptar los términos'),
          jobType: Yup.string()
            .notOneOf(['senior'], 'Esta opción no esta permitida')
            .required('El tipo de trabajo es requerido'),
        })}>
        {(formik) => (
          <Form>
            <MyTextInput label="First name" name="firstName" placeholder="First name" />
            <MyTextInput label="Last name" name="lastName" placeholder="Last name" />
            <MyTextInput label="Email" name="email" placeholder="Email" type="email" />

            <MyCheckbox label="Terms & Conditions" name="terms" />

            <MySelect label="Job type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="senior">Senior</option>
            </MySelect>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
