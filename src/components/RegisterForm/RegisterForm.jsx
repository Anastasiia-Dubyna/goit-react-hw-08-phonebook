import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, Input, Button } from './RegisterForm.styles';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input
          type="text"
          name="name"
          placeholder="Enter your name"
          pattern="^[^\d]+$"
          title="Ім'я має містити лише літери, апострофи, дефіси та відступи"
          required
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          placeholder="Enter your e-mail"
          title="Будь ласка, введіть дійсну адресу електронної пошти"
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          title="Пароль повинен містити тільки латинські літери (як великі, так і малі), цифри та інші символи"
          required
        />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
