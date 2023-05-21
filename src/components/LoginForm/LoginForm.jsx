import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Input, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { email, password } = values;

    dispatch(
      logIn({
        email,
        password,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {props => (
        <Form>
          <Field name="email">
            {({ field }) => (
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input {...field} type="email" name="email" />
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field }) => (
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input {...field} type="password" name="password" />
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="blue"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
