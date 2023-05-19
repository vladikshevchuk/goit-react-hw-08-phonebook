import { Form, Lable } from "./RegisterForm.styled";

export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

  return (
    <Form autoComplete="off">
      <Lable>
        Username
        <input type="text" name="name" />
      </Lable>
      <Lable>
        Email
        <input type="email" name="email" />
      </Lable>
      <Lable>
        Password
        <input type="password" name="password" />
      </Lable>
      <button type="submit">Register</button>
    </Form>
  );
};