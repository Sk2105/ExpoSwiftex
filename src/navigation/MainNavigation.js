import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomNavigation";
import GameUi from "../screens/GameUi";
import LoginScreen from "../screens/LoginScreen";
import VerificationScreen from "../screens/OtpScreen";
import CreatePasswordScreen from "../screens/NewPasswordScreen";

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName="GameUi">
      <Stack.Screen
        name="Tabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameUi"
        component={GameUi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Otp"
        component={VerificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPassword"
        component={CreatePasswordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
