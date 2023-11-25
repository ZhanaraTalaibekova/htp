import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/actions/usersActions";
import { useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const onSubmit = (values, evt) => {
    evt.preventDefault();
    dispatch(loginUser(values));
    navigate("/main");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Email" {...register("login")} />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
