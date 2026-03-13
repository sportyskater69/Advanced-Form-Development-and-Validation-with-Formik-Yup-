import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { colors } from "../theme/MainColors";

interface Props extends TextInputProps {
    label: string;
    error?: string;
    touched?: boolean;
}

export default function InputField({ label, error, touched, ...props }: Props) {
  const showError = touched && error;

  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, showError && styles.inputError]}
                placeholderTextColor={colors.subtext}
                {...props}
                />
            {showError && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  label: {
    color: colors.text,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.inputBg,
    color: colors.text,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: colors.error,
  },
  error: {
    color: colors.error,
    marginTop: 6,
    fontSize: 12,
  },
});