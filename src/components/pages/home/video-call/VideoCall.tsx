"use client";
import { FC, useEffect, useRef } from "react";
import scss from "./VideoCall.module.scss";
import { useSearchParams } from "next/navigation";
import { v4 as randomID } from "uuid";
import { useUserMe } from "@/api/user";
import { useAuthStore } from "@/stores/useAuthStore";

export const VideoCall: FC = () => {
  const searchParams = useSearchParams();
  const roomID = searchParams.get("roomID") || randomID();
  const meetingRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated } = useAuthStore();
  const { data: Me } = useUserMe({ enabled: isAuthenticated() });
  const userMe = Me?.data.fullName;

  const initMeet = async () => {
    if (!meetingRef.current) return;

    const { ZegoUIKitPrebuilt } = await import(
      "@zegocloud/zego-uikit-prebuilt"
    );

    const appID = Number(process.env.NEXT_PUBLIC_APP_ID);
    const server_secret = process.env.NEXT_PUBLIC_SERVER_SECRET!;
    const userID = randomID();
    const userName = userMe || "Bekbol";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      server_secret,
      roomID,
      userID,
      userName
    );

    const meetCreate = ZegoUIKitPrebuilt.create(kitToken);
    meetCreate.joinRoom({
      container: meetingRef.current,
      sharedLinks: [
        {
          name: "My group",
          url: `${window.location.origin}/${window.location.pathname}?roomID=${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  useEffect(() => {
    initMeet();
  }, [roomID]);

  return (
    <div className={scss.content} ref={meetingRef}>
      <h1>VideoCall</h1>
    </div>
  );
};
