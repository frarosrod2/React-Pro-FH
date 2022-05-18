import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css';
import { FormValues } from '../interfaces/form.interfaces';

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (firstName.length < 3) {
      errors.firstName = 'Must be 3 characters or more';
    }
    if (lastName.length < 3) {
      errors.lastName = 'Must be 3 characters or more';
    }
    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
      firstName: 'Fernando',
      lastName: 'Rosa',
      email: 'fernando@gmail.com',
    },
    onSubmit: async (values) => {
      console.log(values);
    },
    validate,
  });

  return (
    <div>
      <h1>Formik Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          onBlur={handleBlur}
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          onBlur={handleBlur}
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email</label>

        <input
          type="text"
          onBlur={handleBlur}
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
