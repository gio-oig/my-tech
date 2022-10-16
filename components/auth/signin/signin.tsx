import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { Form, FormikProps, Formik } from "formik";
import FormInput from "../atoms/formInput";
import { useRouter } from "next/router";

const initialFormilValues = {
  email: "",
  password: "",
};

type SignUpPropertyTypes = {
  email: string;
  password: string;
};

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const SignInForm = () => {
  const router = useRouter();
  const handleSubmit = (values: SignUpPropertyTypes) => {
    alert(JSON.stringify(values, null, 2));
  }
  return (
      <Formik
        initialValues={initialFormilValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<SignUpPropertyTypes>) => (
          <Form>
            <Grid maxWidth="500px" container rowGap={4}>
              <Grid xs={12}>
                <FormInput type="email" label="Email" name="email" />
              </Grid>
              <Grid xs={12}>
                <FormInput type="password" label="Password" name="password" />
              </Grid>
              <Grid xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Submit
                </Button>
              </Grid>
              <Grid xs={12}>
                <Button
                  variant="text"
                  fullWidth
                  onClick={() => router.push("/signup")}
                >
                  Do not have an account? signup
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
  );
};

export default SignInForm;
