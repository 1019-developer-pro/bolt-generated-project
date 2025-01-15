import React from 'react';
    import { useDispatch } from 'react-redux';
    import { useNavigate } from 'react-router-dom';
    import { Button, TextField, Container, Typography, Box } from '@mui/material';
    import { Formik, Form, Field } from 'formik';
    import * as Yup from 'yup';

    const validationSchema = Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    });

    const LoginPage = () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const handleSubmit = (values) => {
        dispatch({ type: 'LOGIN_REQUEST', payload: values });
        navigate('/');
      };

      return (
        <Container maxWidth="sm">
          <Box mt={5} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" component="h1" gutterBottom>
              Login
            </Typography>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form style={{ width: '100%', marginTop: '20px' }}>
                  <Field
                    as={TextField}
                    label="Email"
                    name="email"
                    type="email"
                    fullWidth
                    margin="normal"
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                  <Field
                    as={TextField}
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                    margin="normal"
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '20px' }}
                  >
                    Login
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Container>
      );
    };

    export default LoginPage;
