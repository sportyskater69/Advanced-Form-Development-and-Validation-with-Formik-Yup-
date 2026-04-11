import { colors } from "@/theme/MainColors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeeInfoScreen from "../screens/EmployeeInfoScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator 
        screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.card,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: "700",
        },
        contentStyle: {
          backgroundColor: colors.background,
        },

        }}
        >
            <Stack.Screen name="Sign in" component={SignInScreen} />
            <Stack.Screen name="Sign up" component={SignUpScreen} />
            <Stack.Screen name="Employee info" component={EmployeeInfoScreen} />
        </Stack.Navigator>
    );
}