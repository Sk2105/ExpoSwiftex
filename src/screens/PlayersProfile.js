import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import useResponsiveStyles from "../hooks/useResponsiveStyles";
import { StatusBar } from "expo-status-bar";

const DATA = [
  { id: 1, name: "player 1", color: "#D9534F" },
  { id: 2, name: "player 2", color: "#D9A441" },
  { id: 3, name: "player 3", color: "#5CB85C" },
  { id: 4, name: "player 4", color: "#4285F4" },
  { id: 5, name: "player 5", color: "#AF50D3" },
  { id: 6, name: "player 6", color: "#4DBECF" },
  { id: 7, name: "player 7", color: "#B36B2B" },
];

const PlayerItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.playerBox}>
      <View style={styles.left}>
        <View style={styles.avatarBox}>
          <FontAwesome name="user" size={40} color="white" />
        </View>

        <Text style={styles.playerName}>{item.name}</Text>
      </View>

      <View style={[styles.colorDot, { backgroundColor: item.color }]} />
      <View style={styles.right}>
        <Text style={styles.coinNumber}>2</Text>
        <FontAwesome name="star" size={20} color="#ffcc33" />
      </View>
    </TouchableOpacity>
  );
};

export default function PlayersProfile() {
  const { isMobile, isTablet, isDesktop } = useResponsiveStyles();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.header}>PLAYERS PROFILE</Text>

      <View style={styles.activeBox}>
        <Text style={styles.activeText}>Active Player’s : {DATA.length}</Text>
      </View>

      <FlatList
        data={DATA}
        nestedScrollEnabled={true}
        renderItem={({ item }) => <PlayerItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
      />
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#062246",
    paddingTop: 60,
    paddingHorizontal:16,
  },

  header: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  activeBox: {
    backgroundColor: "#0a2f5c",
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
  },

  activeText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  playerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#082d54",
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#5fc85f",
    padding: 12,
    marginBottom: 12,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatarBox: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#1c2f3f",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    borderColor: "#e7b86a",
    borderWidth: 1,
  },

  avatar: {
    width: 35,
    height: 35,
  },

  playerName: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  colorDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
  },

  coinNumber: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
