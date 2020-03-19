import React from "react";
import { withFormik, Form, Field } from 'formik';

function LoginForm() {
  return (
    <Form>
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <button>Submit!</button>
    </Form>
  );
}

const UserForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  handleSubmit(values) {
    console.log(values);
  }
})(LoginForm);

export default UserForm;