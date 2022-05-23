import { ErrorMessage, useField } from 'formik';
import { TextInputProps } from '../interfaces/form.interfaces';

export const MyTextInput = ({ label, ...props }: TextInputProps) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" type="text" {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component="span"
        className="custom-span-error-class"
      />
    </>
  );
};
