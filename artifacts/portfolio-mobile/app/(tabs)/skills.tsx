import React, { useEffect, useRef } from "react";
import {
  Animated,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

interface Skill {
  name: string;
  level: number;
  color: string;
  category: string;
}

const SKILLS: Skill[] = [
  { name: "HTML", level: 95, color: "#E34F26", category: "Frontend" },
  { name: "CSS", level: 90, color: "#1572B6", category: "Frontend" },
  { name: "JavaScript", level: 85, color: "#F7DF1E", category: "Frontend" },
  { name: "React JS", level: 80, color: "#61DAFB", category: "Frontend" },
  { name: "Tailwind CSS", level: 82, color: "#06B6D4", category: "Frontend" },
  { name: "Bootstrap", level: 88, color: "#7952B3", category: "Frontend" },
  { name: "PHP", level: 75, color: "#777BB4", category: "Backend" },
  { name: "Laravel", level: 70, color: "#FF2D20", category: "Backend" },
];

const CATEGORIES = [...new Set(SKILLS.map((s) => s.category))];

function AnimatedSkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const colors = useColors();
  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const t = setTimeout(() => {
      Animated.timing(widthAnim, {
        toValue: skill.level,
        duration: 900,
        useNativeDriver: false,
      }).start();
    }, delay);
    return () => clearTimeout(t);
  }, []);

  const widthPercent = widthAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={[styles.skillItem, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={styles.skillHeader}>
        <View style={styles.skillLeft}>
          <View style={[styles.skillDot, { backgroundColor: skill.color }]} />
          <Text style={[styles.skillName, { color: colors.foreground, fontFamily: "Poppins_600SemiBold" }]}>
            {skill.name}
          </Text>
        </View>
        <Text style={[styles.skillPct, { color: colors.primary, fontFamily: "Poppins_700Bold" }]}>
          {skill.level}%
        </Text>
      </View>
      <View style={[styles.progressTrack, { backgroundColor: colors.muted }]}>
        <Animated.View
          style={[
            styles.progressFill,
            { backgroundColor: skill.color, width: widthPercent },
          ]}
        />
      </View>
    </View>
  );
}

export default function SkillsScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const topPad = Platform.OS === "web" ? 67 : 0;
  const botPad = Platform.OS === "web" ? 34 : 0;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={[
        styles.container,
        { paddingTop: insets.top + 24 + topPad, paddingBottom: insets.bottom + 80 + botPad },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View style={{ opacity: fadeAnim, width: "100%" }}>
        <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "Poppins_700Bold" }]}>
          <Text style={{ color: colors.primary }}>My</Text> Skills
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground, fontFamily: "Poppins_400Regular" }]}>
          Technologies I work with daily
        </Text>

        {CATEGORIES.map((cat) => (
          <View key={cat} style={styles.categorySection}>
            <View style={styles.categoryLabelRow}>
              <View style={[styles.categoryDot, { backgroundColor: colors.primary }]} />
              <Text style={[styles.categoryLabel, { color: colors.mutedForeground, fontFamily: "Poppins_600SemiBold" }]}>
                {cat}
              </Text>
            </View>
            {SKILLS.filter((s) => s.category === cat).map((skill, idx) => (
              <AnimatedSkillBar key={skill.name} skill={skill} delay={idx * 120} />
            ))}
          </View>
        ))}

        {/* Summary cards */}
        <View style={styles.summaryRow}>
          {[
            { label: "Technologies", value: `${SKILLS.length}+` },
            { label: "Avg Proficiency", value: `${Math.round(SKILLS.reduce((a, s) => a + s.level, 0) / SKILLS.length)}%` },
            { label: "Years Experience", value: "2+" },
          ].map((item) => (
            <View
              key={item.label}
              style={[styles.summaryCard, { backgroundColor: colors.card, borderColor: colors.border }]}
            >
              <Text style={[styles.summaryValue, { color: colors.primary, fontFamily: "Poppins_700Bold" }]}>
                {item.value}
              </Text>
              <Text style={[styles.summaryLabel, { color: colors.mutedForeground, fontFamily: "Poppins_400Regular" }]}>
                {item.label}
              </Text>
            </View>
          ))}
        </View>
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
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 24,
  },
  categorySection: {
    width: "100%",
    marginBottom: 16,
  },
  categoryLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  categoryDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  categoryLabel: {
    fontSize: 12,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  skillItem: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
  },
  skillHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  skillLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  skillDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  skillName: {
    fontSize: 15,
  },
  skillPct: {
    fontSize: 14,
  },
  progressTrack: {
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: {
    height: 6,
    borderRadius: 3,
  },
  summaryRow: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
    marginTop: 8,
  },
  summaryCard: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
  },
  summaryValue: {
    fontSize: 22,
    marginBottom: 2,
  },
  summaryLabel: {
    fontSize: 11,
    textAlign: "center",
  },
});
