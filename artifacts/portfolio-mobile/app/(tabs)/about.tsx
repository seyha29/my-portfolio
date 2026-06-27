import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useRef } from "react";
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

const RESUME_URL = process.env.EXPO_PUBLIC_DOMAIN
  ? `https://${process.env.EXPO_PUBLIC_DOMAIN}/assets/Resume.pdf`
  : "https://seyha29-my-portfolio.vercel.app/resume";

const SKILLS_PREVIEW = ["React", "JavaScript", "TypeScript", "Node.js", "Laravel", "Figma"];

export default function AboutScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(24)).current;

  const topPad = Platform.OS === "web" ? 67 : 0;
  const botPad = Platform.OS === "web" ? 34 : 0;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
    ]).start();
  }, []);

  const openResume = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    await WebBrowser.openBrowserAsync(RESUME_URL);
  };

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
        style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }], width: "100%" }}
      >
        {/* Section header */}
        <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "Poppins_700Bold" }]}>
          <Text style={{ color: colors.primary }}>About</Text> Me
        </Text>

        {/* Photo + quick facts row */}
        <View style={styles.photoRow}>
          <Image
            // @ts-ignore
            source={require("@/assets/images/profile.jpg")}
            style={[styles.photo, { borderColor: colors.primary }]}
          />
          <View style={styles.factsCol}>
            {[
              { label: "Experience", value: "2+ Years" },
              { label: "Location", value: "Phnom Penh" },
              { label: "Status", value: "Available" },
            ].map((f) => (
              <View
                key={f.label}
                style={[styles.factCard, { backgroundColor: colors.card, borderColor: colors.border }]}
              >
                <Text style={[styles.factValue, { color: colors.primary, fontFamily: "Poppins_700Bold" }]}>
                  {f.value}
                </Text>
                <Text style={[styles.factLabel, { color: colors.mutedForeground, fontFamily: "Poppins_400Regular" }]}>
                  {f.label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Bio */}
        <View style={[styles.bioCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.bioText, { color: colors.foreground, fontFamily: "Poppins_400Regular" }]}>
            I'm a{" "}
            <Text style={{ color: colors.primary, fontFamily: "Poppins_600SemiBold" }}>web developer</Text>
            {" "}and{" "}
            <Text style={{ color: colors.primary, fontFamily: "Poppins_600SemiBold" }}>designer</Text>
            {" "}with over two years of experience creating and redesigning websites. I specialize in front-end development using HTML, CSS, JavaScript, and React.
          </Text>
          <Text style={[styles.bioText, { color: colors.foreground, fontFamily: "Poppins_400Regular", marginTop: 10 }]}>
            I also have experience with Node.js, Express, Figma, and other tools. I focus on delivering{" "}
            <Text style={{ color: colors.primary, fontFamily: "Poppins_600SemiBold" }}>responsive</Text>
            ,{" "}
            <Text style={{ color: colors.primary, fontFamily: "Poppins_600SemiBold" }}>user-friendly</Text>
            {" "}websites tailored to client needs.
          </Text>
        </View>

        {/* Tech tags */}
        <Text style={[styles.subheading, { color: colors.mutedForeground, fontFamily: "Poppins_600SemiBold" }]}>
          Technologies
        </Text>
        <View style={styles.tagsRow}>
          {SKILLS_PREVIEW.map((s) => (
            <View
              key={s}
              style={[styles.tag, { backgroundColor: colors.accent, borderColor: colors.border }]}
            >
              <Text style={[styles.tagText, { color: colors.primary, fontFamily: "Poppins_600SemiBold" }]}>
                {s}
              </Text>
            </View>
          ))}
        </View>

        {/* Resume button */}
        <Pressable
          onPress={openResume}
          style={({ pressed }) => [
            styles.resumeBtn,
            { backgroundColor: colors.primary, opacity: pressed ? 0.85 : 1 },
          ]}
        >
          <Ionicons name="document-text-outline" size={20} color="#fff" />
          <Text style={[styles.resumeBtnText, { fontFamily: "Poppins_600SemiBold" }]}>
            View My Resume
          </Text>
          <Ionicons name="arrow-forward" size={18} color="#fff" />
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  sectionTitle: {
    fontSize: 28,
    marginBottom: 20,
  },
  photoRow: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 20,
    alignItems: "flex-start",
  },
  photo: {
    width: 110,
    height: 130,
    borderRadius: 12,
    borderWidth: 2,
  },
  factsCol: {
    flex: 1,
    gap: 8,
  },
  factCard: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  factValue: {
    fontSize: 15,
  },
  factLabel: {
    fontSize: 12,
  },
  bioCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 20,
  },
  bioText: {
    fontSize: 14,
    lineHeight: 22,
  },
  subheading: {
    fontSize: 13,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 28,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
  tagText: {
    fontSize: 13,
  },
  resumeBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 50,
    width: "100%",
  },
  resumeBtnText: {
    color: "#fff",
    fontSize: 16,
  },
});
