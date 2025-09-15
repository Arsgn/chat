import { DirectPage } from "@/components/pages/direct/DirectPage";
import { Suspense } from "react";

const page = () => (
  <Suspense>
    <DirectPage />
  </Suspense>
);
export default page;
