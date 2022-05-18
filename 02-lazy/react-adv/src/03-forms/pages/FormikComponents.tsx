import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>
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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="terms">
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="senior">Senior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
