import { VideoCall } from "@/components/pages/home/video-call/VideoCall";
import { FC, Suspense } from "react";

const page: FC = () => (
  <Suspense>
    <VideoCall />
  </Suspense>
);

export default page;
