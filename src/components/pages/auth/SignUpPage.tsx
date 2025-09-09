"use client";
import { FC } from "react";
import scss from "./SignUpPage.module.scss";
import { useSignUpMutation } from "@/api/user";
import { useForm } from "react-hook-form";

export const SignUpPage: FC = () => {
  const { mutateAsync } = useSignUpMutation();
  const { register, handleSubmit, reset } = useForm<AUTH.RegisterReq>();

  const onSubmit = async (data: AUTH.RegisterReq) => {
    try {
      await mutateAsync(data);
      reset();
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
    }
  };

  return (
    <section className={scss.SignUpPage}>
      <div className="container">
        <div className={scss.content}>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="email"
              {...register("email", { required: true })}
            />
            <input
              type="text"
              placeholder="fullname"
              {...register("fullName", { required: true })}
            />
            <input
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
            />
            <input
              type="number"
              placeholder="age"
              {...register("age", { required: true, valueAsNumber: true })}
            />
            <button type="submit">sign-up</button>
          </form>
        </div>
      </div>
    </section>
  );
};
