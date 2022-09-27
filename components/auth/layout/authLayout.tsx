import { ReactNode, FC } from "react";
import Center from "../../common/atom/center/center";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => (
  <Center height="100%">{children}</Center>
);

export default AuthLayout;
