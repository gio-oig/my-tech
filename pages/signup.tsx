import AuthLayout from "../components/auth/layout/authLayout";
import SignUpForm from "../components/auth/signup/signup";

const SignUn = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};

SignUn.authPage = true;

export default SignUn;
