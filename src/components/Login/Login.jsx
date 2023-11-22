import React from "react";
import { useForm } from "react-hook-form";
// import styles from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/actions/usersActions";

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(loginUser(values));
  };

  return (
    <div >
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Email" {...register("login")} />
        <input type="password" placeholder="Password" {...register("password")} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
