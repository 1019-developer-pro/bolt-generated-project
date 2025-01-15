import React from 'react';
    import { useDispatch } from 'react-redux';
    import { useNavigate } from 'react-router-dom';
    import { Button, TextField, Container, Typography, Box, Paper } from '@mui/material';
    import { Formik, Form, Field } from 'formik';
    import * as Yup from 'yup';
    import styled from '@emotion/styled';

    const StyledPaper = styled(Paper)(({ theme }) => ({
      padding: theme.spacing(3),
      borderRadius: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
    }));

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
        <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <StyledPaper>
            <Box mt={2} display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'text.primary' }}>
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
                      variant="outlined"
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.23)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#6200EE',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#6200EE',
                        },
                        '& .MuiInputBase-input': {
                          color: '#fff',
                        },
                      }}
                    />
                    <Field
                      as={TextField}
                      label="Password"
                      name="password"
                      type="password"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      error={touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.23)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#6200EE',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#6200EE',
                        },
                        '& .MuiInputBase-input': {
                          color: '#fff',
                        },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ marginTop: '20px' }}
                    >
                      Login
                    </Button>
                  </Form>
                )}
              </Formik>
            </Box>
          </StyledPaper>
        </Container>
      );
    };

    export default LoginPage;
