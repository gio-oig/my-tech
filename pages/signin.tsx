import AuthLayout from "../components/auth/layout/authLayout";
import SignInForm from "../components/auth/signin/signin";

const Signin = () => {
  return (
    <AuthLayout title="signin">
      <SignInForm />
    </AuthLayout>
  );
};

Signin.authPage = true;

export default Signin;
