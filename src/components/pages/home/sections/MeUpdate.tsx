"use client";
import { FC, useState } from "react";
import scss from "./MeUpdate.module.scss";
import { useUpdateMe, useUserMe } from "@/api/user";
import { useAuthStore } from "@/stores/useAuthStore";

export const MeUpdate: FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [age, setAge] = useState<number | undefined>(0);
  const { mutateAsync } = useUpdateMe();
  const { isAuthenticated } = useAuthStore();
  const { data } = useUserMe({ enabled: isAuthenticated() });
  const id = data?.data.id;

  const update = async () => {
    try {
      await mutateAsync({
        id,
        data: {
          fullName,
          age,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className={scss.MeUpdate}>
      <div className="container">
        <div className={scss.content}>
          <h1>MeUpdate</h1>
          <input
            type="text"
            value={fullName}
            placeholder="fullName"
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            value={age}
            placeholder="age"
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <button onClick={() => update()}>save</button>
        </div>
      </div>
    </section>
  );
};
