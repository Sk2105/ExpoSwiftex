import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

export default function ChatScreen() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Connect WebSocket
    const ws = new WebSocket("ws://10.186.228.82:8080");
    setSocket(ws);

    ws.onopen = () => addMessage("Connected to WebSocket!");

    ws.onmessage = (event) => addMessage("Server: " + event.data);

    ws.onerror = (e) => addMessage("Error: " + e.message);

    ws.onclose = () => addMessage("Disconnected from server");

    return () => ws.close();
  }, []);

  const addMessage = (msg) => {
    setMessages((prev) => [...prev, msg]);
  };

  const sendMessage = () => {
    if (socket && input.trim().length > 0) {
      socket.send(input);
      addMessage("You: " + input);
      setInput("");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      keyboardVerticalOffset={0}
      behavior="padding"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Expo WebSocket Demo</Text>

        <ScrollView
          style={styles.msgBox}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
        >
          {messages.map((m, i) => (
            <Text
              key={i}
              style={[
                m.includes("Server") ? styles.server : styles.user,
                styles.msgText,
              ]}
            >
              {m}
            </Text>
          ))}
        </ScrollView>

        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Type message..."
            value={input}
            onChangeText={setInput}
          />
          <Button title="Send" onPress={sendMessage} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  msgBox: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 10,
  },
  msgText: {
    marginVertical: 4,
    fontSize: 16,
  },
  server: {
    alignSelf: "flex-start",
    backgroundColor: "#ddd",
    color: "blue",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  user: {
    color: "green",
    alignSelf: "flex-end",
    backgroundColor: "#cfc",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#555",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
});
