import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Input, Button } from '@chakra-ui/react'
import { Form, Lable } from "./LoginForm.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form autoComplete="off" onClick={handleSubmit}>
      <Lable>
        Email
        <Input type="email" name="email" />
      </Lable>
      <Lable>
        Password
        <Input type="password" name="password" />
      </Lable>
      <Button type="submit" colorScheme='blue'>Log In</Button>
    </Form>
  );
};