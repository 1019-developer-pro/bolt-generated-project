import React, { useState, useEffect } from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { Formik, Form, Field, ErrorMessage } from 'formik';
    import * as Yup from 'yup';
    import { addMealLog } from '../store/diet/dietSlice';

    const validationSchema = Yup.object({
      mealType: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
    });

    const DietPlanPage = () => {
      const dispatch = useDispatch();
      const token = useSelector((state) => state.auth.token);
      const dietPlan = useSelector((state) => state.diet.dietPlan);
      const mealLogs = useSelector((state) => state.diet.mealLogs);
      const loading = useSelector((state) => state.diet.loading);
      const error = useSelector((state) => state.diet.error);

      useEffect(() => {
        if (token) {
          dispatch({ type: 'diet/fetchDietPlan', payload: token });
          dispatch({ type: 'diet/fetchMealLogs', payload: token });
        }
      }, [dispatch, token]);

      const handleSubmit = async (values, { resetForm, setSubmitting }) => {
        dispatch(addMealLog({ meal: values, token }));
        resetForm();
        setSubmitting(false);
      };

      return (
        <div className="container">
          <h1>Diet Plan</h1>
          {dietPlan && (
            <div>
              <h2>Your Personalized Diet Plan</h2>
              <p>{dietPlan.description}</p>
            </div>
          )}
          <h2>Log Your Meal</h2>
          <Formik
            initialValues={{ mealType: '', description: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="mealType">Meal Type</label>
                  <Field as="select" name="mealType">
                    <option value="">Select Meal Type</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="snack">Snack</option>
                  </Field>
                  <ErrorMessage name="mealType" component="div" className="error" />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <Field as="textarea" name="description" />
                  <ErrorMessage name="description" component="div" className="error" />
                </div>
                <button type="submit" disabled={isSubmitting || loading}>
                  {loading ? 'Logging...' : 'Log Meal'}
                </button>
                {error && <div className="error">{error}</div>}
              </Form>
            )}
          </Formik>
          <h2>Meal Logs</h2>
          {mealLogs && mealLogs.length > 0 ? (
            <ul>
              {mealLogs.map((log, index) => (
                <li key={index}>
                  {log.mealType}: {log.description}
                </li>
              ))}
            </ul>
          ) : (
            <p>No meal logs yet.</p>
          )}
        </div>
      );
    };

    export default DietPlanPage;
