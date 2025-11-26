import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const GRID_ROWS = 5;
const GRID_COLS = 5;

const sampleImage = require("../../assets/icon.png"); // place your image in /assets

function Header({ activeCount }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <View style={styles.headerTag}><Text style={styles.headerTagText}>Active</Text></View>
        <View style={styles.headerCount}><Text style={styles.headerTagText}>{activeCount}</Text></View>
      </View>
      <Text style={styles.menu}>☰</Text>
    </View>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <View style={{ width: "100%" }}>
      <TouchableOpacity onPress={() => setOpen(!open)} style={styles.accordionHeader}>
        <Text style={styles.accTitle}>{title}</Text>
        <Text style={styles.accArrow}>{open ? "▾" : "▸"}</Text>
      </TouchableOpacity>
      {open && <View style={styles.accordionBody}>{children}</View>}
    </View>
  );
}

function Avatar({ label }) {
  return (
    <View style={styles.avatarRow}>
      <View style={styles.avatarCircle}>
        <Text style={styles.avatarLetter}>{label[0].toUpperCase()}</Text>
      </View>
      <Text style={styles.avatarText}>{label}</Text>
    </View>
  );
}

function Controls({ secondsLeft, selectedSquareCount }) {
  return (
    <View style={styles.controlsRow}>
      <View style={styles.controlBox}>
        <Text style={styles.controlText}>{secondsLeft}s ⏱</Text>
      </View>
      <View style={styles.controlBox}>
        <Text style={styles.controlText}>{selectedSquareCount} ◻️</Text>
      </View>
    </View>
  );
}

function makeInitialSquares() {
  return [
    { id: "s1", r: 0, c: 1, color: "green", value: "$1" },
    { id: "s2", r: 1, c: 2, color: "green", value: "$1" },
    { id: "s3", r: 1, c: 3, color: "green", value: "$1" },
    { id: "s4", r: 0, c: 4, color: "purple", value: "$2" },
    { id: "s5", r: 2, c: 0, color: "purple", value: "$2" },
    { id: "s6", r: 3, c: 2, color: "purple", value: "$2" },
    { id: "s7", r: 4, c: 1, color: "green", value: "$1" },
    { id: "s8", r: 4, c: 2, color: "purple", value: "$2" },
    { id: "s9", r: 2, c: 3, color: "green", value: "$1" },
  ];
}

export default function GameBoard() {
  const [squares, setSquares] = useState(makeInitialSquares);
  const [selectedId, setSelectedId] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(60);

  useEffect(() => {
    if (secondsLeft === 0) return;
    const t = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [secondsLeft]);

  const moveTo = (r, c) => {
    if (!selectedId) return;

    setSquares((prev) =>
      prev.map((sq) =>
        sq.id === selectedId ? { ...sq, r, c } : sq
      )
    );

    setSelectedId(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Header activeCount={10} />

        {/* Accordion */}
        <Accordion title="Player's Profiles">
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={sampleImage} style={{ width: 80, height: 50, borderRadius: 6 }} />
            <Text style={{ color: "white", flex: 1 }}>
              This area can show player profiles, stats and badges.
            </Text>
          </View>
        </Accordion>

        <Accordion title="Game Instructions">
          <Text style={{ color: "white" }}>
            Tap a square, then tap a grid cell to move it.
          </Text>
        </Accordion>

        {/* GRID */}
        <View style={styles.gridBox}>
          <View style={styles.gridBoard}>

            {/* Grid lines */}
            {Array.from({ length: GRID_ROWS + 1 }).map((_, i) => (
              <View
                key={`h-${i}`}
                style={[
                  styles.hLine,
                  { top: `${(i / GRID_ROWS) * 100}%` }
                ]}
              />
            ))}

            {Array.from({ length: GRID_COLS + 1 }).map((_, i) => (
              <View
                key={`v-${i}`}
                style={[
                  styles.vLine,
                  { left: `${(i / GRID_COLS) * 100}%` }
                ]}
              />
            ))}

            {/* Cells */}
            {Array.from({ length: GRID_ROWS }).map((_, r) =>
              Array.from({ length: GRID_COLS }).map((_, c) => (
                <TouchableOpacity
                  key={`cell-${r}-${c}`}
                  onPress={() => moveTo(r, c)}
                  style={[
                    styles.cell,
                    {
                      top: `${(r / GRID_ROWS) * 100}%`,
                      left: `${(c / GRID_COLS) * 100}%`,
                      width: `${100 / GRID_COLS}%`,
                      height: `${100 / GRID_ROWS}%`,
                    },
                  ]}
                />
              ))
            )}

            {/* Squares */}
            {squares.map((sq) => {
              const bg = sq.color === "green" ? "#2a5f3b" : "#7b3a92";
              const border = sq.color === "green" ? "#2f8052" : "#8b3aa8";

              return (
                <TouchableOpacity
                  key={sq.id}
                  onPress={() => setSelectedId(sq.id)}
                  style={[
                    styles.square,
                    {
                      left: `${(sq.c / GRID_COLS) * 100}%`,
                      top: `${(sq.r / GRID_ROWS) * 100}%`,
                      width: `${100 / GRID_COLS}%`,
                      height: `${100 / GRID_ROWS}%`,
                      backgroundColor: bg,
                      borderColor: border,
                      opacity: selectedId === sq.id ? 0.8 : 1
                    },
                  ]}
                >
                  <Text style={styles.squareText}>{sq.value}</Text>
                </TouchableOpacity>
              );
            })}

          </View>
        </View>

        {/* Bottom Controls */}
        <View style={styles.bottomRow}>
          <Controls
            secondsLeft={secondsLeft}
            selectedSquareCount={selectedId ? 1 : 0}
          />

          <View>
            <Text style={styles.player2Label}>player 2</Text>
            <Avatar label="player 2" />
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#071723",
    padding: 16,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#071e2f",
    padding: 16,
    borderRadius: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: { flexDirection: "row", gap: 8 },
  headerTag: {
    backgroundColor: "#0f3b5a",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e6d0a8",
  },
  headerCount: {
    backgroundColor: "#051827",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e6d0a8",
  },
  headerTagText: { color: "white" },
  menu: { color: "white", fontSize: 22 },

  accordionHeader: {
    backgroundColor: "#10263e",
    padding: 12,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#234",
  },
  accTitle: { color: "white", fontSize: 16 },
  accArrow: { color: "white", fontSize: 20 },
  accordionBody: {
    backgroundColor: "#0b2a44",
    padding: 10,
    borderRadius: 6,
  },

  avatarRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#d4e0ff",
    backgroundColor: "#2a2e8f",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarLetter: { color: "white", fontSize: 18 },
  avatarText: { color: "white", fontSize: 14 },

  controlsRow: {
    flexDirection: "row",
    gap: 12,
  },
  controlBox: {
    backgroundColor: "#0d2b41",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
  },
  controlText: { color: "white", fontSize: 14 },

  gridBox: {
    marginTop: 16,
    backgroundColor: "#08253a",
    borderRadius: 12,
    padding: 10,
  },

  gridBoard: {
    width: "100%",
    aspectRatio: 1,
    position: "relative",
    overflow: "hidden",
  },

  hLine: {
    position: "absolute",
    width: "100%",
    borderTopWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    borderStyle: "dashed",
  },

  vLine: {
    position: "absolute",
    height: "100%",
    borderLeftWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    borderStyle: "dashed",
  },

  cell: { position: "absolute" },

  square: {
    position: "absolute",
    borderWidth: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  squareText: { color: "white", fontWeight: "bold" },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  player2Label: {
    color: "#ccc",
    fontSize: 12,
    marginBottom: 4,
  },
});
