import { ErrorMessage, useField } from 'formik';
import { MySelectProps } from '../interfaces/form.interfaces';

export const MySelect = ({ label, ...props }: MySelectProps) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component="span"
        className="custom-span-error-class"
      />
    </>
  );
};
