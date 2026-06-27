import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as WebBrowser from "expo-web-browser";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const EMAILJS_SERVICE_ID = "service_829d9io";
const EMAILJS_TEMPLATE_ID = "template_x2l178l";
const EMAILJS_PUBLIC_KEY = "M45CIlOONt20h0vTk";

const CONTACT_INFO = [
  {
    icon: "mail-outline" as const,
    label: "Email",
    value: "thanseyha2002@gmail.com",
    action: () => WebBrowser.openBrowserAsync("mailto:thanseyha2002@gmail.com"),
  },
  {
    icon: "call-outline" as const,
    label: "Phone",
    value: "+855 186-323-203",
    action: null,
  },
  {
    icon: "location-outline" as const,
    label: "Location",
    value: "Phnom Penh, Cambodia",
    action: null,
  },
];

export default function ContactScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const successAnim = useRef(new Animated.Value(0)).current;

  const topPad = Platform.OS === "web" ? 67 : 0;
  const botPad = Platform.OS === "web" ? 34 : 0;

  const sendEmail = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsSending(true);
    setStatus("idle");

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            user_name: name,
            user_email: email,
            message: message,
          },
        }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        Animated.sequence([
          Animated.timing(successAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
          Animated.delay(3000),
          Animated.timing(successAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
        ]).start(() => setStatus("idle"));
      } else {
        setStatus("error");
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      }
    } catch {
      setStatus("error");
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    } finally {
      setIsSending(false);
    }
  };

  const isValid = name.trim() && email.trim() && message.trim();

  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={[
        styles.container,
        { paddingTop: insets.top + 24 + topPad, paddingBottom: insets.bottom + 80 + botPad },
      ]}
      bottomOffset={20}
      keyboardShouldPersistTaps="handled"
    >
      {/* Section header */}
      <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "Poppins_700Bold" }]}>
        Contact <Text style={{ color: colors.primary }}>Me</Text>
      </Text>
      <Text style={[styles.subtitle, { color: colors.mutedForeground, fontFamily: "Poppins_400Regular" }]}>
        Have questions or want to work together?
      </Text>

      {/* Contact info cards */}
      <View style={styles.infoRow}>
        {CONTACT_INFO.map((info) => (
          <Pressable
            key={info.label}
            onPress={info.action ? () => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); info.action!(); } : undefined}
            style={({ pressed }) => [
              styles.infoCard,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                opacity: pressed && info.action ? 0.8 : 1,
              },
            ]}
          >
            <View style={[styles.infoIconBg, { backgroundColor: colors.accent }]}>
              <Ionicons name={info.icon} size={20} color={colors.primary} />
            </View>
            <Text style={[styles.infoLabel, { color: colors.mutedForeground, fontFamily: "Poppins_600SemiBold" }]}>
              {info.label}
            </Text>
            <Text style={[styles.infoValue, { color: colors.foreground, fontFamily: "Poppins_400Regular" }]}>
              {info.value}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Form */}
      <View style={[styles.formCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.formTitle, { color: colors.foreground, fontFamily: "Poppins_700Bold" }]}>
          Send a Message
        </Text>

        <Text style={[styles.label, { color: colors.mutedForeground, fontFamily: "Poppins_600SemiBold" }]}>
          Your Name
        </Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="John Doe"
          placeholderTextColor={colors.mutedForeground}
          style={[
            styles.input,
            {
              backgroundColor: colors.background,
              borderColor: colors.border,
              color: colors.foreground,
              fontFamily: "Poppins_400Regular",
            },
          ]}
          returnKeyType="next"
          autoCapitalize="words"
        />

        <Text style={[styles.label, { color: colors.mutedForeground, fontFamily: "Poppins_600SemiBold" }]}>
          Your Email
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="john@example.com"
          placeholderTextColor={colors.mutedForeground}
          keyboardType="email-address"
          autoCapitalize="none"
          style={[
            styles.input,
            {
              backgroundColor: colors.background,
              borderColor: colors.border,
              color: colors.foreground,
              fontFamily: "Poppins_400Regular",
            },
          ]}
          returnKeyType="next"
        />

        <Text style={[styles.label, { color: colors.mutedForeground, fontFamily: "Poppins_600SemiBold" }]}>
          Your Message
        </Text>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Hello, I'd like to talk about..."
          placeholderTextColor={colors.mutedForeground}
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          style={[
            styles.textarea,
            {
              backgroundColor: colors.background,
              borderColor: colors.border,
              color: colors.foreground,
              fontFamily: "Poppins_400Regular",
            },
          ]}
        />

        {/* Status messages */}
        {status === "success" && (
          <Animated.View
            style={[styles.statusBanner, { backgroundColor: "#dcfce7", opacity: successAnim }]}
          >
            <Ionicons name="checkmark-circle" size={18} color="#16a34a" />
            <Text style={[styles.statusText, { color: "#16a34a", fontFamily: "Poppins_600SemiBold" }]}>
              Message sent successfully!
            </Text>
          </Animated.View>
        )}
        {status === "error" && (
          <View style={[styles.statusBanner, { backgroundColor: "#fee2e2" }]}>
            <Ionicons name="close-circle" size={18} color="#dc2626" />
            <Text style={[styles.statusText, { color: "#dc2626", fontFamily: "Poppins_600SemiBold" }]}>
              Failed to send. Please try again.
            </Text>
          </View>
        )}

        {/* Submit button */}
        <Pressable
          onPress={sendEmail}
          disabled={isSending || !isValid}
          style={({ pressed }) => [
            styles.submitBtn,
            {
              backgroundColor: isValid ? colors.primary : colors.muted,
              opacity: pressed ? 0.85 : 1,
            },
          ]}
        >
          {isSending ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <>
              <Ionicons name="paper-plane" size={18} color={isValid ? "#fff" : colors.mutedForeground} />
              <Text
                style={[
                  styles.submitBtnText,
                  {
                    color: isValid ? "#fff" : colors.mutedForeground,
                    fontFamily: "Poppins_600SemiBold",
                  },
                ]}
              >
                Send Message
              </Text>
            </>
          )}
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  sectionTitle: {
    fontSize: 28,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    width: "100%",
    marginBottom: 20,
  },
  infoCard: {
    flex: 1,
    minWidth: 90,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "flex-start",
    gap: 6,
  },
  infoIconBg: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  infoLabel: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  infoValue: {
    fontSize: 12,
    lineHeight: 16,
  },
  formCard: {
    width: "100%",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 16,
  },
  formTitle: {
    fontSize: 18,
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    marginBottom: 14,
  },
  textarea: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    height: 120,
    marginBottom: 14,
  },
  statusBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  statusText: {
    fontSize: 13,
  },
  submitBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    borderRadius: 50,
  },
  submitBtnText: {
    fontSize: 16,
  },
});
