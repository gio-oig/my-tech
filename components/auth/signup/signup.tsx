import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { Form, useFormik } from "formik";
import * as Yup from "yup";
import { useField, Form, FormikProps, Formik } from "formik";
import { useRef } from "react";
import Center from "../../common/atom/center/center";
import FormInput from "../atoms/formInput";

const initialFormilValues = {
  name: "",
  email: "",
  password: "",
};

type SignUpPropertyTypes = {
  name: string;
  email: string;
  password: string;
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const SignUpForm = () => {
  return (
    <Center height="100vh">
      <Formik
        initialValues={initialFormilValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(props: FormikProps<SignUpPropertyTypes>) => (
          <Form>
            <Grid maxWidth="500px" container rowGap={4}>
              <Grid xs={12}>
                <FormInput label="Name" name="name" />
              </Grid>
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
                <Button type="submit" variant="text" fullWidth>
                  Do not have an account? signu
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Center>
  );
};

export default SignUpForm;
