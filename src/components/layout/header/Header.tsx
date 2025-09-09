"use client";
import { FC } from "react";
import scss from "./Header.module.scss";
import { useRouter } from "next/navigation";
import { useUserMe } from "@/api/user";
import { useAuthStore } from "@/stores/useAuthStore";

export const Header: FC = () => {
  const { isAuthenticated } = useAuthStore();
  const { data } = useUserMe({ enabled: isAuthenticated() });
  const router = useRouter();
  console.log(data);

  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>Header</h1>
          <div>{data?.data.email}</div>
          <h1>{data?.data.fullName}</h1>
          <h1>{data?.data.age}</h1>
          <button onClick={() => router.push("/user-update")}>update</button>
          <button onClick={() => router.push("/message")}>messages</button>
          <button onClick={() => router.push("/direct")}>direct</button>
        </div>
      </div>
    </section>
  );
};
