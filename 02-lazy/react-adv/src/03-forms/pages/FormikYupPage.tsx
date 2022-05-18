import { useFormik } from 'formik';

import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: 'Fernando',
      lastName: 'Rosa',
      email: 'fernando@gmail.com',
    },
    onSubmit: async (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Debe de tener 15 caracteres o menos')
        .required('El nombre es requerido'),
      lastName: Yup.string()
        .max(15, 'Debe de tener 15 caracteres o menos')
        .required('El apellido es requerido'),
      email: Yup.string()
        .email('Email no tiene un formato válido')
        .required('El email es requerido'),
    }),
  });

  return (
    <div>
      <h1>Formik Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps('firstName')} />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email</label>
        <input type="text" {...getFieldProps('email')} />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
