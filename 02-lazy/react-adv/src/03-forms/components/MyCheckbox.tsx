import { ErrorMessage, useField } from 'formik';
import { MyCheckboxProps } from '../interfaces/form.interfaces';

export const MyCheckbox = ({ label, ...props }: MyCheckboxProps) => {
  const [field] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage
        name={props.name}
        component="span"
        className="custom-span-error-class"
      />{' '}
    </>
  );
};
