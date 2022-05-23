import Header from "../../components/Header/Header";
import {Form, Field, FormRow, Select, Option, ErrorMessage} from "../../lib/style/generalStyles";
import Section from "../../components/Section/Section";
import {Formik} from "formik";
import * as Yup from "yup";
import Button from "../../components/Button/Button";

const Register = () => {
    return (
    <>
    <Header isSecondary={true}/>

    <Section title={"Register"} isMainSection isCentered>

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
                            <Field type="text" name="firstName" placeHolder="First name..." disabled={formik.isSubmiting} />
                            <ErrorMessage component={"div"} name="firstName" />
                        </FormRow>
                        <FormRow>
                            <Field type="text" name="lastName" placeHolder="Last name..." disabled={formik.isSubmiting} />
                            <ErrorMessage component={"div"} name="lastName" />
                        </FormRow>
                        <FormRow>
                            <Field type="email" name="email" placeHolder="email..." disabled={formik.isSubmiting} />
                            <ErrorMessage component={"div"} name="email" />
                        </FormRow> 
                        <FormRow>
                            <Field type="password" name="password" placeHolder="password..." disabled={formik.isSubmiting} />
                            <ErrorMessage component={"div"} name="password" />
                        </FormRow> 
                        <FormRow>
                            <Field type="password" name="passwordConfirmed" placeHolder="Confirm password..." disabled={formik.isSubmiting} />
                            <ErrorMessage component={"div"} name="passwordConfirmed" />
                        </FormRow> 
                        <FormRow>
                            <Field type="text" name="gitHubUserName" placeHolder="GitHub username..." disabled={formik.isSubmiting} />
                            <ErrorMessage component={"div"} name="gitHubUserName" />
                        </FormRow>
                        <FormRow>
                            <Field type="text" name="zeplinUserName" placeHolder="Zeplin username..." disabled={formik.isSubmiting} />
                            <ErrorMessage component={"div"} name="zeplinUserName" />
                        </FormRow>
                        <FormRow>
                            <Select id="activeFacultyYear" {...formik.getFieldProps("activeFacultyYear")} >
                                <Option value="" disabled hidden>Choose an Active faculty year</Option>
                                <Option value='0'>Not a student</Option>
                                <Option value='1'>1st faculty year</Option>
                                <Option value='2'>2nd faculty year</Option>
                                <Option value='3'>3rd faculty year</Option>
                                <Option value='4'>4th faculty year</Option>
                                <Option value='5'>5th faculty year</Option>
                            </Select>
                            <ErrorMessage component={"div"} name="activeFacultyYear" />
                        </FormRow>
                        <FormRow>
                            <Button isOutline isForm disabled={formik.isSubmiting}>
                                   {formik.isSubmitting ? "Processing..." : "Register"}
                            </Button>
                        </FormRow>
                    </Form>
                )}
        </Formik>
    </Section>
    </>
    );
};

export default Register;