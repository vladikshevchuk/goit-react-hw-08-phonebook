import { Form, Lable } from "./LoginForm.styled";

export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

  return (
    <Form autoComplete="off">
      <Lable>
        Email
        <input type="email" name="email" />
      </Lable>
      <Lable>
        Password
        <input type="password" name="password" />
      </Lable>
      <button type="submit">Log In</button>
    </Form>
  );
};