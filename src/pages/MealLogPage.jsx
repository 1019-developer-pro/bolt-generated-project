import React, { useState } from 'react';
    import {
      Container,
      Typography,
      TextField,
      Button,
      Box,
      Grid,
      FormControl,
      InputLabel,
      Select,
      MenuItem,
      CircularProgress,
    } from '@mui/material';
    import { useFormik } from 'formik';
    import * as yup from 'yup';
    import axios from 'axios';

    const validationSchema = yup.object({
      mealType: yup.string().required('Meal type is required'),
      foodName: yup.string().required('Food name is required'),
      calories: yup.number().required('Calories are required').positive('Calories must be positive'),
      quantity: yup.number().required('Quantity is required').positive('Quantity must be positive'),
    });

    function MealLogPage() {
      const [loading, setLoading] = useState(false);
      const formik = useFormik({
        initialValues: {
          mealType: '',
          foodName: '',
          calories: '',
          quantity: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
          setLoading(true);
          try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log('Meal logged:', values);
            formik.resetForm();
          } catch (error) {
            console.error('Error logging meal:', error);
          } finally {
            setLoading(false);
          }
        },
      });

      return (
        <Container>
          <Typography variant="h4" gutterBottom>
            Meal Log
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel id="meal-type-label">Meal Type</InputLabel>
                  <Select
                    labelId="meal-type-label"
                    id="mealType"
                    name="mealType"
                    value={formik.values.mealType}
                    onChange={formik.handleChange}
                    error={formik.touched.mealType && Boolean(formik.errors.mealType)}
                    helperText={formik.touched.mealType && formik.errors.mealType}
                    label="Meal Type"
                  >
                    <MenuItem value="breakfast">Breakfast</MenuItem>
                    <MenuItem value="lunch">Lunch</MenuItem>
                    <MenuItem value="dinner">Dinner</MenuItem>
                    <MenuItem value="snack">Snack</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  id="foodName"
                  name="foodName"
                  label="Food Name"
                  value={formik.values.foodName}
                  onChange={formik.handleChange}
                  error={formik.touched.foodName && Boolean(formik.errors.foodName)}
                  helperText={formik.touched.foodName && formik.errors.foodName}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  id="calories"
                  name="calories"
                  label="Calories"
                  type="number"
                  value={formik.values.calories}
                  onChange={formik.handleChange}
                  error={formik.touched.calories && Boolean(formik.errors.calories)}
                  helperText={formik.touched.calories && formik.errors.calories}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  id="quantity"
                  name="quantity"
                  label="Quantity"
                  type="number"
                  value={formik.values.quantity}
                  onChange={formik.handleChange}
                  error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                  helperText={formik.touched.quantity && formik.errors.quantity}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : 'Log Meal'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      );
    }

    export default MealLogPage;
