import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {
  const { formData, onChange, resetForm, isValidEmail } = useForm({
    name: 'Fernando',
    email: 'fernando@gmail.com',
    password1: '123456',
    password2: '123456',
  });

  const { name, email, password1, password2 } = formData;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={`${isValidEmail(email) && 'has-error'}`}
        />
        {isValidEmail(email) && <span>Email no válido</span>}

        <input
          onChange={onChange}
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length <= 6 && password1.trim().length <= 0 && (
          <span>La contraseña tiene que tener seis letras</span>
        )}
        <input
          onChange={onChange}
          type="password"
          name="password2"
          placeholder="Repeat password"
          value={password2}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length <= 0 && password1!== password2 && <span>Este campo es necesario</span>}
        <button type="submit">Create</button>
        <button onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};
