import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useResponsiveStyles from "../hooks/useResponsiveStyles";

const { width } = Dimensions.get("window");

export default function GameUi() {
  const { isMobile, isTablet, isDesktop } = useResponsiveStyles();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0A2040" }}>
      <StatusBar barStyle="light-content" />
      <View
        style={[
          isMobile && styles.header,
          isTablet && styles.headerTablet,
          isDesktop && styles.headerDesktop,
        ]}
      >
        <TouchableOpacity style={styles.activeBtn}>
          <Text style={styles.activeText}>Active</Text>
          <View style={styles.countBox}>
            <Text style={styles.count}>10</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.menu}>≡</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          isMobile && styles.container,
          isTablet && styles.containerTablet,
          isDesktop && styles.containerDesktop,
        ]}
        contentContainerStyle={[
          isMobile && styles.content,
          isTablet && styles.contentTablet,
          isDesktop && styles.contentDesktop,]}
        horizontal={isDesktop}
        nestedScrollEnabled={isDesktop}
      >
        <View style={[isMobile && styles.playerRow, isTablet && styles.playerRowTablet, isDesktop && styles.playerRowDesktop]}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://miro.medium.com/v2/resize:fit:1144/1*WSIrFNsgUAUfuTZ59w9Wpg.jpeg",
            }}
          />
          <Text style={styles.playerName}>player 1</Text>
        </View>

        <View
          style={[
            isMobile && styles.board,
            isTablet && styles.boardTablet,
            isDesktop && styles.boardDesktop,
          ]}
        >
          {[...Array(6)].map((_, row) => (
            <View
              key={row}
              style={[
                isMobile && styles.rowCell,
                isTablet && styles.rowCellTablet,
                isDesktop && styles.rowCellDesktop,
              ]}
            >
              {[...Array(6)].map((_, col) => (
                <View
                  key={col}
                  style={[
                    isMobile && styles.cell,
                    isTablet && styles.cellTablet,
                    isDesktop && styles.cellDesktop,
                    col === 0
                      ? {
                          ...styles.activeCell,
                        }
                      : { borderTopWidth: 1 },
                    (row === 5 || col === 5) && styles.borderBottom,
                  ]}
                >
                  {col === 0 && (
                    <View style={styles.centerTextBox}>
                      <Text style={styles.cellText}>$1</Text>
                    </View>
                  )}
                  <View style={styles.dotTop} />
                  {row === 5 && <View style={styles.dotBottom} />}
                  {col === 5 && <View style={styles.dotTopRight} />}
                  {row === 5 && col === 5 && (
                    <View style={styles.dotBottomRight} />
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>

        <View
          style={[
            isMobile && styles.footer,
            isTablet && styles.footerTablet,
            isDesktop && styles.footerDesktop,
          ]}
        >
          <View style={styles.player2Row}>
            <View style={styles.timerBox}>
              <Text style={styles.timer}>60 s ⏱️</Text>
            </View>
            <View style={styles.scoreBox}>
              <Text style={styles.scoreText}>4</Text>
              <View
                style={[
                  isMobile && styles.cell2,
                  isTablet && styles.cell2Tablet,
                  isDesktop && styles.cell2Desktop,
                ]}
              >
                <View style={[styles.dotTop , isDesktop && styles.dotTopDesktop]} />
                <View style={[styles.dotBottom, isDesktop && styles.dotBottomDesktop]} />
                <View style={[styles.dotTopRight,isDesktop && styles.dotTopRightDesktop]} />
                <View style={[styles.dotBottomRight,isDesktop && styles.dotBottomRightDesktop]} />
              </View>
            </View>
          </View>
          <View style={styles.player2Row}>
            <Image
              style={styles.avatarSmall}
              source={{
                uri: "https://miro.medium.com/v2/resize:fit:1144/1*WSIrFNsgUAUfuTZ59w9Wpg.jpeg",
              }}
            />
            <Text style={styles.player2Name}>player 2</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A2040",
    paddingHorizontal: 15,
  },
  containerTablet: {
    paddingHorizontal: 30,
    backgroundColor: "#0A2040",
    flex: 1,
  },

  containerDesktop: {
    alignSelf: "center",
    paddingHorizontal: 30,
    backgroundColor: "#0A2040",
    flexDirection:"row",
    gap:16
  },
  content: { flexGrow: 1 ,gap:4},
  contentTablet: { flexGrow: 1 ,gap:16,justifyContent:"space-between",alignItems:"center"},
  contentDesktop: { flexGrow: 1 ,gap:16,justifyContent:"space-between",alignItems:"center"},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  headerTablet: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  headerDesktop: {
    width: "60%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    alignItems: "center",
  },
  activeBtn: {
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: "#123362",
    borderColor: "#736c58",
    borderRadius: 8,
    alignItems: "center",
  },
  activeText: {
    color: "#fff",
    fontSize: 16,
    padding: 4,
    marginRight: 12,
  },
  countBox: {
    padding: 4,
    borderLeftWidth: 1,
    borderColor: "#736c58",
  },
  count: { color: "#fff" },
  menu: { color: "#736c58", fontSize: 30, marginRight: 10 },
  playerRow: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    alignSelf: "flex-start",
  },
  playerRowTablet: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    alignSelf: "flex-start",
  },
  playerRowDesktop: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    alignSelf: "flex-start",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 12,
  },
  playerName: { color: "#fff", fontSize: 18 },
  board: {
    width: width * 0.9,
    height: width * 0.9,
    marginTop: 15,
    backgroundColor: "#123362",
    borderRadius: 8,
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
  },

  boardTablet: {
    width: width * 0.8,
    height: width * 0.8,
    aspectRatio: 1,
    marginTop: 8,
    backgroundColor: "#123362",
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
  },
  boardDesktop: {
    width: width * 0.4,
    height: width * 0.4,
    aspectRatio: 1,
    marginTop: 8,
    minWidth:600,
    minHeight:600,
    backgroundColor: "#123362",
    borderRadius: 8,
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 1,
    borderColor: "#fff",
    alignSelf: "center",
    padding: 10,
  },
  rowCell: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  rowCellTablet: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  rowCellDesktop: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  cell: {
    width: width * 0.13,
    height: width * 0.13,
    aspectRatio: 1,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  cellTablet: {
    width: width * 0.13,
    height: width * 0.13,
    aspectRatio: 1,
    maxHeight: 70,
    maxWidth: 70,
    minHeight:60,
    minWidth:60,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  cellDesktop: {
    width: width * 0.10,
    height: width * 0.10,
    aspectRatio: 1,
    maxHeight: 90,
    maxWidth: 90,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#6f198d",
      borderColor: "#a815b5",
      borderWidth: 2,
    },
  },
  activeCell: {
    backgroundColor: "#6f198d",
    borderColor: "#a815b5",
    borderWidth: 2,
    borderStyle: "solid",
  },
  centerTextBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  dot: {
    width: width * 0.025,
    height: width * 0.025,
    backgroundColor: "#fff",
    borderRadius: 16,
    maxHeight: 30,
    maxWidth: 30,
  },
  dotTop: {
    width: width * 0.025,
    height: width * 0.025,
    position: "absolute",
    left: "-10%",
    top: "-10%",
    backgroundColor: "#fff",
    borderRadius: 16,
    maxHeight: 20,
    maxWidth: 20,
  },

  dotTopDesktop: {
    width: width * 0.025,
    height: width * 0.025,
    left: "-10%",
    top: "-10%",
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 16,
    maxHeight: 10,
    maxWidth: 10,
  },
  dotTopRight: {
    width: width * 0.025,
    height: width * 0.025,
    right: "-10%",
    top: "-10%",
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 16,
    maxHeight: 20,
    maxWidth: 20,
  },
  dotTopRightDesktop:{
    width: width * 0.025,
    height: width * 0.025,
    right: "-10%",
    top: "-10%",
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 16,
    maxHeight: 10,
    maxWidth: 10,
  },
  dotBottom: {
    width: width * 0.025,
    height: width * 0.025,
    left: "-10%",
    bottom: "-10%",
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 16,
    maxHeight: 20,
    maxWidth: 20,
  },
  dotBottomDesktop: {
    width: width * 0.025,
    height: width * 0.025,
    left: "-10%",
    bottom: "-10%",
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 16,
    maxHeight: 10,
    maxWidth: 10,
  },
  dotBottomRight: {
    width: width * 0.025,
    height: width * 0.025,
    right: "-10%",
    bottom: "-10%",
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 16,
    maxHeight: 20,
    maxWidth: 20,
  },
  dotBottomRightDesktop: {
    width: width * 0.025,
    height: width * 0.025,
    right: "-10%",
    bottom: "-10%",
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 16,
    maxHeight: 10,
    maxWidth: 10,
  },
  footer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerTablet: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerDesktop: {
    alignSelf:"flex-end",
    marginVertical: 30,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    flexDirection:"column-reverse",
    gap: 10,
  },
  timerBox: {
    borderWidth: 1,
    borderColor: "#123362",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
  timer: { color: "#fff", fontSize: 16 },
  player2Row: { alignItems: "center" },
  scoreBox: {
    backgroundColor: "#123362",
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex:1,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 12,
  },
  scoreText: { color: "#fff", fontSize: 16 },
  cell2: {
    width: width * 0.06,
    height: width * 0.06,
    backgroundColor: "#2b7830",
    borderColor: "#5bd23e",
    borderWidth: 1,
  },
  cell2Tablet: {
    width: width * 0.06,
    height: width * 0.06,
    maxHeight: 25,
    maxWidth: 25,
    backgroundColor: "#2b7830",
    borderColor: "#5bd23e",
    borderWidth: 1,
  },
  cell2Desktop: {
    width: width * 0.06,
    height: width * 0.06,
    maxHeight: 30,
    maxWidth: 30,
    backgroundColor: "#2b7830",
    borderColor: "#5bd23e",
    borderWidth: 1,
  },
  avatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  player2Name: { color: "#fff", fontSize: 18 },
});
