import InputField from "@/components/InputField";
import { Formik } from "formik";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import { colors } from "../theme/MainColors";

type Props = {
  navigation: any;
};

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),
});

export default function SignInScreen({ navigation }: Props) {
  return (
    <View style={styles.screen}>
      <View style={[styles.card, styles.border]}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignInSchema}
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
                label="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                error={errors.email}
                touched={touched.email}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Enter your email"
              />

              <InputField
                label="Password"
                value={values.password}
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={errors.password}
                touched={touched.password}
                placeholder="Enter your password"
              />

              <Pressable
                onPress={handleSubmit as any}
                disabled={!isValid}
                style={[styles.button, !isValid && styles.buttonDisabled]}
              >
                <Text style={styles.buttonText}>Sign In</Text>
              </Pressable>
            </>
          )}
        </Formik>
        {/* Button changed to pressable for better styling. I dont like styling <Button /> haha*/}
        <View style={styles.redirectView}>
          <Pressable onPress={() => navigation.navigate("Sign up")}>
            {/* Don&apos; for an ' */}
            <Text style={styles.link}>Don&apos;t have an account? Sign Up</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Employee info")}>
            <Text style={styles.link}>Go to Employee Info Form</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  redirect: {
    padding: 10,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 20,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 6,
  },
  subtitle: {
    color: colors.subtext,
    fontSize: 15,
    marginBottom: 24,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
  },
  redirectView: {
    marginTop: 20,
    alignItems: "center",
    gap: 10,
  },
  link: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "600",
  },
  border: {
    borderWidth: 2,
    borderColor: colors.border,
  },
});
