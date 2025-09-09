"use client";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface ILayoutClientProps {
  children: ReactNode;
}

const LayoutClient: FC<ILayoutClientProps> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <>{children}</>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </ReactQueryProvider>
  );
};

export default LayoutClient;
