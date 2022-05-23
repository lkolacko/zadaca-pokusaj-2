import Header from "../../components/Header/Header";
import {Form, Field, FormRow, Select, Option, ErrorMessage} from "../../lib/style/generalStyles";
import Section from "../../components/Section/Section";
import {Formik} from "formik";
import * as Yup from "yup";
import Button from "../../components/Button/Button";

const Login = () => {
    return (
    <>
    <Header isSecondary={true}/>

    <Section title={"Sign-in"} isMainSection isCentered>

        <Formik initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmed: "",
            gitHubUserName: "",
            zeplinUserName: "",
            activeFacultyYear: "",
            isAdmin: false,
        }} 
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                        .required("First name is required"),
                    lastName: Yup.string()
                        .required("Last name is required"),
                    email: Yup.string()
                        .email("Invalid email address").required("Email is required"),
                    password: Yup.string()
                        .min(8, "Password must be at least 8 characters long").required("Password is required"),
                    passwordConfirmed: Yup.string()
                        .test("password-match", "password must match", function(value){
                            return this.parent.password === value
                        }),
                    gitHubUserName: Yup.string().required("Github username is required"),
                    zeplinUserName: Yup.string().required("Zeplin username is required"),
                    activeFacultyYear: Yup.string().required("Active faculty year is required"),
            })}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false)
                        actions.resetForm({
                            firstName: "",
                            lastName: "",
                            email: "",
                            password: "",
                            passwordConfirmed: "",
                            gitHubUserName: "",
                            zeplinUserName: "",
                            activeFacultyYear: "",
                            isAdmin: false,
                        })
                    }, 1000)
                }}
        >
                {(formik) => (
                    <Form isCentered>
                        <FormRow>
                            <Field type="email" name="email" placeHolder="email..." disabled={formik.isSubmiting} />
                            <ErrorMessage component={"div"} name="email" />
                        </FormRow> 
                        <FormRow>
                            <Field type="password" name="password" placeHolder="password..." disabled={formik.isSubmiting} />
                            <ErrorMessage component={"div"} name="password" />
                        </FormRow> 
                        <FormRow>
                            <Button isOutline isForm disabled={formik.isSubmiting}>
                                   {formik.isSubmitting ? "Processing..." : "Sign-in"}
                            </Button>
                        </FormRow>
                    </Form>
                )}
        </Formik>
    </Section>
    </>
    );
};

export default Login;