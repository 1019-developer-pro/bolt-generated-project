import React from 'react';
    import { Formik, Form, Field, ErrorMessage } from 'formik';
    import * as Yup from 'yup';
    import { useDispatch, useSelector } from 'react-redux';
    import { useNavigate } from 'react-router-dom';
    import { authStart } from '../../store/auth/authSlice';

    const validationSchema = Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
    });

    const SignupPage = () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const loading = useSelector((state) => state.auth.loading);
      const error = useSelector((state) => state.auth.error);

      const handleSubmit = async (values, { setSubmitting }) => {
        dispatch({ type: 'auth/signup', payload: values });
        setSubmitting(false);
      };

      return (
        <div className="auth-container">
          <div className="auth-form">
            <h2>Sign Up</h2>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" className="error" />
                  </div>
                  <button type="submit" disabled={isSubmitting || loading}>
                    {loading ? 'Signing up...' : 'Sign Up'}
                  </button>
                  {error && <div className="error">{error}</div>}
                </Form>
              )}
            </Formik>
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      );
    };

    export default SignupPage;