"use client";
import { FC, useState } from "react";
import scss from "./DirectPage.module.scss";
import {
  useGetPrivateMessageQuery,
  useGetUsersMessageQuery,
  useSendMessageToUserMutation,
} from "@/api/message";
import { useRouter, useSearchParams } from "next/navigation";

export const DirectPage: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const receiverId = searchParams.get("receiver");
  const { data, refetch } = useGetPrivateMessageQuery(Number(receiverId));
  const { mutateAsync: sendMessageToUser } = useSendMessageToUserMutation();
  const [message, setMessage] = useState<string>("");
  const { data: users } = useGetUsersMessageQuery();

  const handleSendMessage = async () => {
    try {
      await sendMessageToUser({
        receiverId: Number(receiverId),
        message: message,
      });
    } catch (error) {
      console.log(error);
    }
    setMessage("");
    refetch();
  };

  return (
    <section className={scss.DirectPage}>
      <div className="container">
        <div className={scss.content}>
          <h1>DirectPage</h1>
            <div className={scss.header}>
            {data?.data.map((item) => (
              <div key={item.id}>
                <p>{item.message}</p>
              </div>
            ))}
          </div>
          <div className={scss.Chats}>
            {users?.data.map((item, ind) => (
              <div
                key={ind}
                onClick={() => router.push(`/direct/?receiver=${item.id}`)}
              >
                {item.fullName}
              </div>
            ))}
          </div>
        
          <div className={scss.input}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>send</button>
          </div>
        </div>
      </div>
    </section>
  );
};
