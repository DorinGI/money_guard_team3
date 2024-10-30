import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './AddTransactionForm.module.css';

const AddTransactionForm = () => {
  const initialValues = {
    type: 'Cheltuieli', // Default type
    sum: '',
    date: '',
    category: '',
    comment: '',
  };

  const validationSchema = Yup.object({
    type: Yup.string().required('Required'),
    sum: Yup.number().required('Required').positive('Must be positive'),
    date: Yup.date().required('Required'),
    category: Yup.string().when('type', {
      is: 'Cheltuieli',
      then: Yup.string().required('Category is required for expenses'),
    }),
    comment: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Replace with your API call
    console.log('Form data submitted:', values);
    // Reset form after submission
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="type">Transaction Type</label>
          <Field as="select" name="type">
            <option value="Cheltuieli">Cheltuieli</option>
            <option value="Venituri">Venituri</option>
          </Field>
          <ErrorMessage name="type" component="div" className={styles.error} />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="sum">Sum</label>
          <Field type="number" name="sum" />
          <ErrorMessage name="sum" component="div" className={styles.error} />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="date">Date</label>
          <Field type="date" name="date" />
          <ErrorMessage name="date" component="div" className={styles.error} />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="category">Category</label>
          <Field type="text" name="category" />
          <ErrorMessage
            name="category"
            component="div"
            className={styles.error}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="comment">Comment</label>
          <Field type="text" name="comment" />
          <ErrorMessage
            name="comment"
            component="div"
            className={styles.error}
          />
        </div>

        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};

export default AddTransactionForm;
