import formJson from '../data/custom-form.json';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido');
    }
    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 1, 'Necesita más caracteres');
    }
    if (rule.type === 'email') {
      schema = schema.email('El email no es válido');
    }
    //Otras reglas...
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForms = () => {
  return (
    <div>
      <h1>Dynamic forms</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'input' || type === 'password' || type === 'email') {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                  />
                );
              } else if (type === 'select') {
                return (
                  <MySelect key={name} label={label} name={name}>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={label}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
