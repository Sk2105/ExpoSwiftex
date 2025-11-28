import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import useResponsiveStyles from "../hooks/useResponsiveStyles";

const Color = {
  background: "#061328",
  primary: "#4E8D46",
  white: "#FFFFFF",
  gray: "#A0A0A0",
  inputBorder: "#E0E0E0",
};

export default function LoginScreen({ navigation }) {
  const { isMobile, isTablet, isDesktop } = useResponsiveStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          isMobile && styles.content,
          isTablet && styles.contentTablet,
          isDesktop && styles.contentDesktop,
        ]}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Welcome to FastDots</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <FontAwesome5
              name="user-alt"
              size={18}
              color={Color.white}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="abc@example.com"
              placeholderTextColor={Color.gray}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputWrapper}>
            <MaterialIcons
              name="lock"
              size={20}
              color={Color.white}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="########"
              placeholderTextColor={Color.gray}
              value={password}
              cursorColor={Color.white}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            >
              <Feather
                name={isPasswordVisible ? "eye" : "eye-off"}
                size={20}
                color={Color.white}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgotPassContainer}>
            <Text style={styles.forgotPassText}>Forget password ?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Not a Member yet ? </Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>Join Now ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  contentDesktop: {
    width: "50%",
    alignSelf: "center",
    gap: 10,
    paddingHorizontal: "10%",
    paddingVertical: 40,
  },
  contentTablet: {
    width: "80%",
    alignSelf: "center",
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Color.white,
    textAlign: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  formContainer: {
    width: "100%",
    marginBottom: 20,
    marginTop: 30,
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
    color: Color.white,
    fontSize: 16,
    outlineStyle: "none",
    paddingVertical: 5,
  },
  forgotPassContainer: {
    alignItems: "flex-end",
    marginBottom: 30,
  },
  forgotPassText: {
    color: Color.white,
    fontSize: 14,
    fontWeight: "500",
  },
  button: {
    backgroundColor: Color.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: Color.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  footerText: {
    color: Color.white,
    fontSize: 16,
  },
  linkText: {
    color: Color.white,
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50,
    opacity: 0.7,
  },
  logoText: {
    color: "#5F7D8B",
    fontSize: 24,
    fontWeight: "900",
    marginTop: 5,
    letterSpacing: 1,
  },
});
