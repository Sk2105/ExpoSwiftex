import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialIcons, Entypo } from "@expo/vector-icons";

import HomeScreen from "../screens/PlayersProfile";
import TransactionsScreen from "../screens/PlayersProfile";
import PayoutsScreen from "../screens/PlayersProfile";
import ShopScreen from "../screens/PlayersProfile";
import SettingsScreen from "../screens/PlayersProfile";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      {/* TRANSACTIONS */}
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <MaterialIcons
                name="compare-arrows"
                size={24}
                color={focused ? "#ffcc66" : "white"}
              />
              <Text style={[styles.label, focused && styles.activeLabel]} numberOfLines={1} >
                Transactions
              </Text>
            </View>
          ),
        }}
      />

      {/* PAYOUTS */}
      <Tab.Screen
        name="Payouts"
        component={PayoutsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Entypo
                name="message"
                size={23}
                color={focused ? "#ffcc66" : "white"}
              />
              <Text style={[styles.label, focused && styles.activeLabel]} numberOfLines={1}>
                Payouts
              </Text>
            </View>
          ),
        }}
      />

      {/* HOME (Center Button) */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.centerWrapper}>
             
                <View style={styles.homeCircle} />
                <View style={[styles.homeCircleInner]} >
                <FontAwesome5
                  name="home"
                  size={26}
                  color={focused ? "#dfc27d" : "white"}
                />
                <Text
                  style={[styles.labelCenter, focused && { color: "#dfc27d" }]} numberOfLines={1}
                >
                  Home
                </Text>
              </View>
            </View>
          ),
        }}
      />

      {/* SHOP */}
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Entypo
                name="shopping-cart"
                size={24}
                color={focused ? "#ffcc66" : "white"}
              />
              <Text style={[styles.label, focused && styles.activeLabel]} numberOfLines={1}>
                Shop
              </Text>
            </View>
          ),
        }}
      />

      {/* SETTINGS */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <FontAwesome5
                name="cog"
                size={24}
                color={focused ? "#ffcc66" : "white"}
              />
              <Text style={[styles.label, focused && styles.activeLabel]} numberOfLines={1}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#0a2a58",
    borderTopWidth: 0,
    elevation: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: Platform.OS === "ios" ? 25 : 20,
  },

  tabItem: {
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    width: 70,
    textAlign: "center",
    marginTop: 2,
    fontSize: 11,
    fontWeight: "bold",
    color: "white",
  },

  activeLabel: {
    color: "#ffcc66",
  },

  centerWrapper: {
    justifyContent: "center",
    alignItems: "center",

  },

  homeCircle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom:4,    
    backgroundColor:"#0a2a58",
    padding:10
  },
  homeCircleInner: {
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    bottom:5,
    borderRadius: 100,
    borderColor: "#dfc27d",
  },

  homeCircleActive: {
    backgroundColor: "#1b4f86",
  },

  labelCenter: {
    marginTop: 2,
    fontSize: 14,
    color: "white",
    fontWeight: "600",
  },
});
