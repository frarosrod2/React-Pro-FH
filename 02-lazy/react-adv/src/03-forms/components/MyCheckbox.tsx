import { useField } from 'formik';
import { TextInputProps, MyCheckboxProps } from '../interfaces/form.interfaces';

export const MyCheckbox = ({ label, ...props }: MyCheckboxProps) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      {meta.touched && meta.error && <span className="error">{meta.error}</span>}
    </>
  );
};
