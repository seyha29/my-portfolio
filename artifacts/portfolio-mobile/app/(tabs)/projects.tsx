import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const PROJECT_COLORS = ["#2563eb", "#7c3aed", "#059669", "#d97706", "#dc2626", "#0891b2"];

interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
  skills: string[];
}

const PROJECTS: Project[] = [
  {
    title: "University IU CAM",
    description: "A responsive university website built with React and CSS modules featuring modern UI components and smooth animations.",
    link: "https://seyha29.github.io/my-react-website/",
    tags: ["React", "CSS Modules", "Responsive"],
  },
  {
    title: "Portfolio Website",
    description: "Professional portfolio showcasing projects and skills with responsive design and interactive elements.",
    link: "https://seyha29-my-portfolio.vercel.app/",
    tags: ["React", "CSS", "Responsive Design"],
  },
  {
    title: "Laravel E-Commerce",
    description: "Full-featured e-commerce platform built with Laravel featuring product management and payment processing.",
    link: "https://your-booking-platform.com",
    tags: ["Laravel", "MySQL", "Payment Integration"],
  },
  {
    title: "React E-Commerce Store",
    description: "Modern e-commerce app with shopping cart, user authentication, Stripe payment, and Khmer/English translation.",
    link: "https://seyha29.github.io/ecomerces_react_js/",
    tags: ["React", "Stripe", "i18n"],
  },
];

const CERTIFICATES: Certificate[] = [
  {
    title: "AWS Academy Graduate",
    issuer: "Amazon Web Services",
    date: "April 27, 2025",
    link: "https://drive.google.com/file/d/167TJCCbPVYB8vAECvkFgJrXN1zyxl_oA/view",
    skills: ["Cloud Computing", "AWS Services", "Security"],
  },
  {
    title: "Fortinet Network Security Associate",
    issuer: "Fortinet",
    date: "June 15, 2025",
    link: "https://drive.google.com/file/d/16F9uzdxm8PCtkIme2w0QAImxY3N0bXQh/view",
    skills: ["Network Security", "Firewalls", "Threat Protection"],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const colors = useColors();
  const accentColor = PROJECT_COLORS[index % PROJECT_COLORS.length];

  const openProject = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    await WebBrowser.openBrowserAsync(project.link);
  };

  return (
    <View style={[styles.projectCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={[styles.projectColorBar, { backgroundColor: accentColor }]} />
      <View style={styles.projectContent}>
        <Text style={[styles.projectTitle, { color: colors.foreground, fontFamily: "Poppins_700Bold" }]}>
          {project.title}
        </Text>
        <Text style={[styles.projectDesc, { color: colors.mutedForeground, fontFamily: "Poppins_400Regular" }]}>
          {project.description}
        </Text>
        <View style={styles.tagsRow}>
          {project.tags.map((tag) => (
            <View key={tag} style={[styles.tag, { backgroundColor: colors.accent, borderColor: colors.border }]}>
              <Text style={[styles.tagText, { color: colors.primary, fontFamily: "Poppins_600SemiBold" }]}>
                {tag}
              </Text>
            </View>
          ))}
        </View>
        <Pressable
          onPress={openProject}
          style={({ pressed }) => [
            styles.visitBtn,
            { borderColor: accentColor, opacity: pressed ? 0.75 : 1 },
          ]}
        >
          <Text style={[styles.visitBtnText, { color: accentColor, fontFamily: "Poppins_600SemiBold" }]}>
            Visit Project
          </Text>
          <Ionicons name="arrow-forward" size={14} color={accentColor} />
        </Pressable>
      </View>
    </View>
  );
}

function CertCard({ cert }: { cert: Certificate }) {
  const colors = useColors();

  const openCert = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    await WebBrowser.openBrowserAsync(cert.link);
  };

  return (
    <Pressable
      onPress={openCert}
      style={({ pressed }) => [
        styles.certCard,
        { backgroundColor: colors.card, borderColor: colors.primary, opacity: pressed ? 0.85 : 1 },
      ]}
    >
      <View style={styles.certHeader}>
        <View style={[styles.certIcon, { backgroundColor: colors.accent }]}>
          <Ionicons name="ribbon" size={22} color={colors.primary} />
        </View>
        <View style={styles.certInfo}>
          <Text style={[styles.certTitle, { color: colors.foreground, fontFamily: "Poppins_700Bold" }]}>
            {cert.title}
          </Text>
          <Text style={[styles.certIssuer, { color: colors.primary, fontFamily: "Poppins_600SemiBold" }]}>
            {cert.issuer}
          </Text>
          <Text style={[styles.certDate, { color: colors.mutedForeground, fontFamily: "Poppins_400Regular" }]}>
            {cert.date}
          </Text>
        </View>
      </View>
      <View style={styles.certSkills}>
        {cert.skills.map((s) => (
          <View key={s} style={[styles.certTag, { backgroundColor: colors.accent }]}>
            <Text style={[styles.certTagText, { color: colors.primary, fontFamily: "Poppins_400Regular" }]}>
              {s}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.certFooter}>
        <Ionicons name="open-outline" size={14} color={colors.mutedForeground} />
        <Text style={[styles.certFooterText, { color: colors.mutedForeground, fontFamily: "Poppins_400Regular" }]}>
          View certificate
        </Text>
      </View>
    </Pressable>
  );
}

export default function ProjectsScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const topPad = Platform.OS === "web" ? 67 : 0;
  const botPad = Platform.OS === "web" ? 34 : 0;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
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
        {/* Projects Section */}
        <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "Poppins_700Bold" }]}>
          <Text style={{ color: colors.primary }}>Web</Text> Projects
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground, fontFamily: "Poppins_400Regular" }]}>
          Here are some of my recent works
        </Text>

        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}

        {/* Certificates Section */}
        <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "Poppins_700Bold", marginTop: 16 }]}>
          <Text style={{ color: colors.primary }}>My</Text> Certificates
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground, fontFamily: "Poppins_400Regular" }]}>
          Industry-recognized certifications
        </Text>

        {CERTIFICATES.map((cert) => (
          <CertCard key={cert.title} cert={cert} />
        ))}
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
    marginBottom: 16,
  },
  projectCard: {
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 14,
    overflow: "hidden",
  },
  projectColorBar: {
    height: 4,
    width: "100%",
  },
  projectContent: {
    padding: 16,
  },
  projectTitle: {
    fontSize: 16,
    marginBottom: 6,
  },
  projectDesc: {
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 10,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 12,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
  },
  tagText: {
    fontSize: 11,
  },
  visitBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    alignSelf: "flex-start",
  },
  visitBtnText: {
    fontSize: 13,
  },
  certCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  certHeader: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  certIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  certInfo: {
    flex: 1,
  },
  certTitle: {
    fontSize: 14,
    marginBottom: 2,
  },
  certIssuer: {
    fontSize: 13,
    marginBottom: 2,
  },
  certDate: {
    fontSize: 12,
  },
  certSkills: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 10,
  },
  certTag: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
  },
  certTagText: {
    fontSize: 11,
  },
  certFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  certFooterText: {
    fontSize: 12,
  },
});
