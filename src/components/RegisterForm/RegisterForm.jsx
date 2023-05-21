import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Input, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { name, email, password } = values;

    dispatch(
      register({
        name,
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
          <Field name="name">
            {({ field }) => (
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input {...field} type="text" name="name" />
              </FormControl>
            )}
          </Field>
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
