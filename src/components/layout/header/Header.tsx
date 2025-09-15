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

  const getInitials = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : "U";
  };

  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>Header</h1>
             <div className={scss.actionButtons}>
            <button onClick={() => router.push("/user-update")}>
              Update
            </button>
            <button onClick={() => router.push("/message")}>
              Messages
            </button>
            <button onClick={() => router.push("/direct")}>
              Direct
            </button>
            
          </div>
          
          <div className={scss.userProfile}>
            <div className={scss.avatar}>
              {getInitials(data?.data.fullName || "")}
            </div>
            <div className={scss.userDetails}>
              <div className={scss.email}>{data?.data.email}</div>
              <h1 className={scss.name}>{data?.data.fullName}</h1>
              <h1 className={scss.age}>{data?.data.age} years old</h1>
            </div>
          </div>

       
        </div>
      </div>
    </section>
  );
};