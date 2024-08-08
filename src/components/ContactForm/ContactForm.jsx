import s from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid';
import * as Yup from 'yup';






const ContactForm = ({ onAdd }) => {
  const fieldIdName = nanoid(6)
  const fieldIdNumber = nanoid(6)

  const inputRules = Yup.object({
    name: Yup.string().required('This field is required!').min(3).max(50),
    number: Yup.string().required('This field is required!').min(3).max(50)
  })

  const initialValues = {
    name: '',
    number: ''
  }

  const handleSubmit = (values, actions) => {
    onAdd({ id: nanoid(6), ...values })

    actions.resetForm()
  }



  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={inputRules}>
      <Form className={s.form}>

        <label htmlFor={fieldIdName} className={s.label}> Name </label>
        <Field id={fieldIdName} name="name" className={s.input} />
        <ErrorMessage name="name" component="span" className={s.error}/>

        <label htmlFor={fieldIdNumber} className={s.label}> Number </label>
        <Field id={fieldIdNumber} name="number" className={s.input} />
        <ErrorMessage name="number" component="span" className={s.error}/>

        <button type='submit' className={s.button}> Add Contact </button>

      </Form>
    </Formik>
  );
}

export default ContactForm;