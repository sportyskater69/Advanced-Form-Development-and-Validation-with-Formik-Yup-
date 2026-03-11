import InputField from "@/components/InputField";
import { Formik } from "formik";
import { Button, StyleSheet, View } from "react-native";
import * as Yup from "yup";


const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

    password: Yup.string()
        .min(5, "Password must be at least 5 characters")
        .required("Password is required"),
});


export default function SignInScreen() {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={SignInSchema}
                onSubmit={(values) => {
                    console.log(values)
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

                        <Button
                            title="Sign In"
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