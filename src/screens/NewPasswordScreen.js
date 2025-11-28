import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import useResponsiveStyles from "../hooks/useResponsiveStyles";

const Color = {
  background: "#061328",
  primary: "#4E8D46",
  white: "#FFFFFF",
  gray: "#A0A0A0",
  inputBorder: "#E0E0E0",
};

export default function CreatePasswordScreen() {
  const { isMobile, isTablet, isDesktop } = useResponsiveStyles();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={[
            isMobile && styles.scrollContent,
            isTablet && styles.scrollContentTablet,
            isDesktop && styles.scrollContentDesktop,
          ]}
        >
          <Text style={styles.title}>Create New Password</Text>
          <Text style={styles.subtitle}>
            set your password so you can Login FastDots
          </Text>

          <View style={styles.formContainer}>
            {/* Enter Password */}
            <View style={styles.inputWrapper}>
              <MaterialIcons
                name="lock-outline"
                size={22}
                color={Color.white}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter password"
                placeholderTextColor={Color.gray}
                secureTextEntry={!showPass}
                value={password}
                cursorColor={Color.white}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                <Feather
                  name={showPass ? "eye" : "eye-off"}
                  size={20}
                  color={Color.white}
                />
              </TouchableOpacity>
            </View>

            {/* Confirm Password */}
            <View style={styles.inputWrapper}>
              <MaterialIcons
                name="lock-outline"
                size={22}
                color={Color.white}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm password"
                placeholderTextColor={Color.gray}
                secureTextEntry={!showConfirm}
                cursorColor={Color.white}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                <Feather
                  name={showConfirm ? "eye" : "eye-off"}
                  size={20}
                  color={Color.white}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
  scrollContentDesktop: {
    width: "50%",
    alignSelf: "center",
    gap: 10,
    paddingHorizontal: "8%",
    paddingBottom: 40,
  },
  scrollContentTablet: {
    width: "80%",
    alignSelf: "center",
    gap: 10,
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  scrollContent: {
    flexGrow: 1,
    gap: 10,
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  title: {
    fontSize: 30,
    color: Color.white,
    textAlign: "left",
    marginBottom: 10,
    marginTop: 60,
  },
  subtitle: {
    fontSize: 20,
    color: Color.gray,
    marginBottom: 30,
    lineHeight: 28,
  },
  formContainer: {
    width: "100%",
    marginTop: 10,
    gap: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Color.inputBorder,
    marginBottom: 25,
    paddingBottom: 8,
  },
  inputIcon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
    outlineStyle: "none",
    color: Color.white,
    fontSize: 18,
    paddingVertical: 5,
  },
  button: {
    backgroundColor: Color.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: Color.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
