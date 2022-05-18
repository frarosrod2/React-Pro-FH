import { useField } from 'formik';
import { TextInputProps } from '../interfaces/form.interfaces';

export const MyTextInput = ({ label, ...props }: TextInputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" type="text" {...field} {...props} />
      {meta.touched && meta.error && <span className="error">{meta.error}</span>}
    </>
  );
};
