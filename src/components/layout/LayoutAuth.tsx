import { FC, ReactNode } from "react";

interface ILayoutAuthProps {
    children: ReactNode;
}
const LayoutAuth: FC<ILayoutAuthProps> = ({ children }) => {
    return <>{children}</>;
};

export default LayoutAuth;