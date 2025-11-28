import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MainNavigation from "./src/navigation/MainNavigation";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [message, setMessage] = useState("Connecting...");
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={{ colors: { background: "#061328" } }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#061328" }}>
          <StatusBar style="light" />
          <MainNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
