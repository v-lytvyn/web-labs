import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('First Name is required')
    .max(20, 'First Name must be 20 characters or less'),
  lastName: Yup.string()
    .required('Last Name is required')
    .max(20, 'Last Name must be 20 characters or less'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\d{10,12}$/, 'Phone must be a 10-digit number')
    .required('Phone is required'),
  address: Yup.string().required('Address is required'),
});

const ErrorText = ({ children }) => (
  <div className="error-text">{children}</div>
);

const CheckoutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log('Form Data:', values);
          resetForm();
          navigate('/success');
        }}
      >
        {() => (
          <Form className="checkout-form">
            <div className="form-group">
              <label>First Name</label>
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName" component={ErrorText} />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName" component={ErrorText} />
            </div>

            <div className="form-group">
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component={ErrorText} />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <Field name="phone" type="text" />
              <ErrorMessage name="phone" component={ErrorText} />
            </div>

            <div className="form-group">
              <label>Address</label>
              <Field name="address" type="text" />
              <ErrorMessage name="address" component={ErrorText} />
            </div>

            <div className="form-actions">
              <button type="button" onClick={() => navigate(-1)}>
                Go Back
              </button>
              <button type="submit">Continue</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutPage;
