import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GameUi from "./src/screens/GameUi";
import PusherDom from "./src/screens/PushDom";
import PlayersProfile from "./src/screens/PlayersProfile";
import BottomTabs from "./src/screens/BottomNavigation";
import { SafeAreaViewBase } from "react-native";
export default function App() {
  const [message, setMessage] = useState("Connecting...");
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 , backgroundColor: "#0a2a58" }}>
          {/* <BottomTabs /> */}
          <GameUi/>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
