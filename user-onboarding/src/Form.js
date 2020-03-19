import React, { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.username);
    console.log(user.password);
  };

  return (
    <div className="loginForm">
      {console.log(user)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default UserForm;