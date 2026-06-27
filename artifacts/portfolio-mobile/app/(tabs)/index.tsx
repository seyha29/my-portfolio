import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const ROLES = [
  "Web Developer",
  "React Developer",
  "Frontend Developer",
  "Freelancer",
];

const SOCIAL_LINKS = [
  { icon: "logo-github" as const, url: "https://github.com/seyha29", label: "GitHub" },
  { icon: "logo-facebook" as const, url: "https://facebook.com", label: "Facebook" },
  { icon: "paper-plane" as const, url: "https://t.me/thanseyha", label: "Telegram" },
  { icon: "logo-linkedin" as const, url: "https://linkedin.com", label: "LinkedIn" },
];

function useTypingAnimation(words: string[], speed = 80, pause = 1500) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayed((prev) => prev.slice(0, -1)),
        speed / 2
      );
    } else {
      timeout = setTimeout(
        () => setDisplayed(currentWord.slice(0, displayed.length + 1)),
        speed
      );
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, speed, pause]);

  return displayed;
}

function SocialButton({ icon, url, label }: { icon: any; url: string; label: string }) {
  const colors = useColors();
  const scale = useRef(new Animated.Value(1)).current;

  const handlePress = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Animated.sequence([
      Animated.timing(scale, { toValue: 0.88, duration: 80, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, duration: 120, useNativeDriver: true }),
    ]).start();
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <Pressable onPress={handlePress} accessibilityLabel={label}>
      <Animated.View
        style={[
          styles.socialBtn,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
            transform: [{ scale }],
          },
        ]}
      >
        <Ionicons name={icon} size={22} color={colors.primary} />
      </Animated.View>
    </Pressable>
  );
}

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const role = useTypingAnimation(ROLES);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 700, useNativeDriver: true }),
    ]).start();
  }, []);

  const topPad = Platform.OS === "web" ? 67 : 0;
  const botPad = Platform.OS === "web" ? 34 : 0;

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={[
        styles.container,
        { paddingTop: insets.top + 24 + topPad, paddingBottom: insets.bottom + 80 + botPad },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View
        style={[
          styles.content,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        {/* Profile Photo */}
        <View style={styles.photoWrapper}>
          <Image
            // @ts-ignore
            source={require("@/assets/images/profile1.jpg")}
            style={[styles.photo, { borderColor: colors.primary }]}
          />
          <View style={[styles.photoBadge, { backgroundColor: colors.primary }]}>
            <Text style={styles.photoBadgeText}>TS</Text>
          </View>
        </View>

        {/* Greeting */}
        <Text style={[styles.greeting, { color: colors.mutedForeground, fontFamily: "Poppins_400Regular" }]}>
          Hey, I'm
        </Text>
        <Text style={[styles.name, { color: colors.foreground, fontFamily: "Poppins_700Bold" }]}>
          Than{" "}
          <Text style={{ color: colors.primary }}>Seyha</Text>
        </Text>

        {/* Typing animation */}
        <View style={styles.roleRow}>
          <Text style={[styles.roleLabel, { color: colors.mutedForeground, fontFamily: "Poppins_400Regular" }]}>
            I'm a{" "}
          </Text>
          <Text style={[styles.roleText, { color: colors.primary, fontFamily: "Poppins_600SemiBold" }]}>
            {role}
            <Text style={{ color: colors.primary }}>|</Text>
          </Text>
        </View>

        {/* Bio */}
        <Text style={[styles.bio, { color: colors.mutedForeground, fontFamily: "Poppins_400Regular" }]}>
          Freelance web developer skilled in modern JavaScript frameworks. I create responsive, accessible, and performant web applications with clean code and intuitive user experiences.
        </Text>

        {/* Social Links */}
        <View style={styles.socialRow}>
          {SOCIAL_LINKS.map((s) => (
            <SocialButton key={s.label} icon={s.icon} url={s.url} label={s.label} />
          ))}
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 24,
  },
  content: {
    alignItems: "center",
    width: "100%",
  },
  photoWrapper: {
    position: "relative",
    marginBottom: 24,
  },
  photo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
  },
  photoBadge: {
    position: "absolute",
    bottom: 4,
    right: 4,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  photoBadgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700" as const,
  },
  greeting: {
    fontSize: 16,
    marginBottom: 4,
  },
  name: {
    fontSize: 36,
    letterSpacing: -0.5,
    marginBottom: 8,
    textAlign: "center",
  },
  roleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  roleLabel: {
    fontSize: 18,
  },
  roleText: {
    fontSize: 18,
  },
  bio: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 28,
    maxWidth: 340,
  },
  socialRow: {
    flexDirection: "row",
    gap: 14,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  socialBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
