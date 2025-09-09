"use client";
import { FC, useState } from "react";
import scss from "./SignInPage.module.scss";
import { useSignInMutation } from "@/api/user";

export const SignInPage: FC = () => {
  const { mutateAsync: loginMutate } = useSignInMutation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async () => {
    try {
      const newObj = {
        email,
        password,
      };
      await loginMutate(newObj);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className={scss.SignInPage}>
      <div className="container">
        <div className={scss.content}>
          <h1>SignInPage</h1>
          <input
            type="text"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => login()}>login</button>
        </div>
      </div>
    </section>
  );
};
