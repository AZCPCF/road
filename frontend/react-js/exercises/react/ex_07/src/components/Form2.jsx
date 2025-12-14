import { useState } from "react";
import "./Form2.css";
export default function Form2() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    isValidate: false,
  });
  const validate = (email, password) => {
    setValues({
      email,
      password,
      isValidate: (email.includes("@") && email.split('@')[1].length >= 1) && password?.length >= 8,
    });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p>email : </p>
      <input
        placeholder="email"
        type="email"
        value={values.email}
        onInput={(e) => {
          validate(e.target.value, values.password);
        }}
      />
      <p>password : </p>
      <input
        placeholder="password"
        type="password"
        value={values.password}
        onInput={(e) => {
          validate(values.email, e.target.value);
        }}
      />
      <br />
      <button type="submit" disabled={!values.isValidate}>
        Submit
      </button>
    </form>
  );
}
