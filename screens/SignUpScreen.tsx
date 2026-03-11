import { Formik } from "formik";
import { Button, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import InputField from "../components/InputField";

const SignUpSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, "Name too short")
        .required("Full name is required"),

    email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

    password: Yup.string()
        .min(5, "Password must be at least 5 characters")
        .required("Password is required"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords don't match")
        .required("Confirm password"),
})

export default function SignUpScreen() {

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    fullName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={SignUpSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >

                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    isValid,
                }) => (
                    <>
                        <InputField
                            label="Full Name"
                            value={values.fullName}
                            onChangeText={handleChange("fullName")}
                            onBlur={handleBlur("fullName")}
                            error={errors.fullName}
                            touched={touched.fullName}
                        />

                        <InputField
                            label="Email"
                            value={values.email}
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            error={errors.email}
                            touched={touched.email}
                        />

                        <InputField
                            label="Password"
                            value={values.password}
                            secureTextEntry
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            error={errors.password}
                            touched={touched.password}
                        />

                        <InputField
                            label="Confirm Password"
                            value={values.confirmPassword}
                            secureTextEntry
                            onChangeText={handleChange("confirmPassword")}
                            onBlur={handleBlur("confirmPassword")}
                            error={errors.confirmPassword}
                            touched={touched.confirmPassword}
                        />

                        <Button
                            title="Sign Up"
                            onPress={handleSubmit as any}
                            disabled={!isValid}
                        />
                    </>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});