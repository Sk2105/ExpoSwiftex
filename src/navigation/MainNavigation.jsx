import { createStackNavigator } from "@react-navigation/stack";
import HomeTabs from "./HomeTabs";
import CartScreen from "../screens/CartScreen";
import PaymentScreen from "../screens/PaymentScreen";
import OrderConfirmationScreen from "../screens/OrderConfirmationScreen";
import TrackOrderScreen from "../screens/TrackOrderScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName="Chat">
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderConfirmation"
        component={OrderConfirmationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TrackOrder"
        component={TrackOrderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
