import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function form({ values, errors, touched, isSubmitting }) {

  return (
      <Form>
        <div>
            {touched.name && errors.name && <p>{errors.name}</p>} 
            <Field type="text" name="name" placeholder="name"/>
        </div>
        <div>
            {touched.email && errors.email && <p>{errors.email}</p>} 
            <Field type="email" name="email" placeholder="email"/>
        </div>
        <div>
            {touched.password && errors.password && <p>{errors.password}</p>} 
            <Field type="password" name="password" placeholder="password"/>
        </div>
        <label>
        <Field type="checkbox" name="Terms(TOS)" checked={values.tos} />
            Accept Terms of Service :-)
        </label>
        <button disabled={isSubmitting}>Submit!</button>
      </Form>
  );
}
const UserForm = withFormik({

    mapPropsToValues({ name, email, password, TOS}) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            TOS: TOS || false
        };
    },
validationSchema: Yup.object().shape({
    name: Yup.string("flase name").required("valid name required"),
    email: Yup.string("false email").required("valid email required"),
    password: Yup.string("password must have 10 characters or more").min(10).required("password required")
}),
    handleSubmit(values,  {resetForm, setErrors, setSubmitting }) {
        if (values.email === "joshaw66@gmail.com") {
            setErrors({ email: "e-mail already in use" });
        }  else {
            axios
            .post("https://reqres.in/api/users", values)
            .then(res => {
                resetForm();
                setSubmitting(false);
            })
            .catch(err => {
                console.log("an error has occured", err);
                setSubmitting(false);
            });
        }
    }
})(form);

export default UserForm;