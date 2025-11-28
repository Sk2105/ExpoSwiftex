import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useResponsiveStyles from "../hooks/useResponsiveStyles";

const Color = {
  background: "#061328",
  primary: "#4E8D46",
  white: "#FFFFFF",
  gray: "#A0A0A0",
};

export default function VerificationScreen({ navigation }) {
  const { isMobile, isTablet, isDesktop } = useResponsiveStyles();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const inputs = useRef([]);

  const handleChangeText = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length !== 0 && index < 3) {
      inputs.current[index + 1].focus();
    }

    if (index === 3 && text.length !== 0) {
      Keyboard.dismiss();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputs.current[index - 1].focus();
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }
  };

  const handleConfirm = () => {
    
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={[
            isMobile && styles.contentContainer,
            isTablet && styles.contentContainerTablet,
            isDesktop && styles.contentContainerDesktop,
          ]}
        >
          <Text style={styles.title}>Verification Code</Text>
          <Text style={styles.subtitle}>
            we have sent the verification code to your email address
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpBox}
                value={digit}
                placeholder=""
                placeholderTextColor={Color.gray}
                keyboardType="numberbric"
                maxLength={1}
                secureTextEntry={false}
                onChangeText={(text) => handleChangeText(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                ref={(input) => {
                  inputs.current[index] = input;
                }}
                selectionColor={Color.primary}
                selectTextOnFocus={true}
                textAlign="center"
              />
            ))}
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleConfirm()}
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
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
  contentContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  contentContainerDesktop: {
    width: "50%",
    alignSelf: "center",
    gap: 5,
    paddingHorizontal: "8%",
    paddingVertical: 40,
  },
  contentContainerTablet: {
    width: "80%",
    alignSelf: "center",
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: Color.white,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: Color.gray,
    marginBottom: 30,
    lineHeight: 24,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
    marginTop: 20,
  },
  otpBox: {
    width: 60,
    height: 60,
    borderRadius: 16,
    fontSize: 24,
    textAlign: "center",
    outlineStyle: "none",
    color: Color.white,
    borderWidth: 1.5,
    borderColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    color: Color.white,
    fontSize: 26,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Color.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: Color.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
