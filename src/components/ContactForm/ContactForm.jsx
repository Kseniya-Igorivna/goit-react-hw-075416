import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required(),
  number: Yup.string().required(),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <Field className={styles.input} name="name" type="text" />
        <ErrorMessage name="name" component="div" />

        <label className={styles.label} htmlFor="number">
          Number
        </label>
        <Field className={styles.input} name="number" type="tel" />
        <ErrorMessage name="number" component="div" />

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
