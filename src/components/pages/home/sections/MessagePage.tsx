"use client";
import { FC, useState } from "react";
import scss from "./MessagePage.module.scss";
import {
  useGetMessagesQuery,
  useGetUsersMessageQuery,
  useSendMessageMutation,
} from "@/api/message";

export const MessagePage: FC = () => {
  const { data } = useGetMessagesQuery();
  const { mutateAsync: sendMessage } = useSendMessageMutation();
  const { data: users } = useGetUsersMessageQuery();
  const [message, setMessage] = useState<string>("");
  console.log(data);

  const handleMessage = async () => {
    if (!message.trim()) return;
    try {
      await sendMessage({
        message: message.trim(),
      });
      setMessage("");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <section className={scss.MessagePage}>
      <div className="container">
        <div className={scss.content}>
          <h1>MessagePage</h1>
          <div>{
            users?.data.map((item, ind) => (
              <div key={ind}>
                {item.fullName}
              </div>
            ))
            }</div>
          <div>
            {data?.data.map((item) => (
              <div key={item.id}>
                <p>{item.message}</p>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleMessage}>send</button>
        </div>
      </div>
    </section>
  );
};
