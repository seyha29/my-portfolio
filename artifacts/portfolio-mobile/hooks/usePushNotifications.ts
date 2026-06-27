import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

const API_BASE = process.env["EXPO_PUBLIC_DOMAIN"]
  ? `https://${process.env["EXPO_PUBLIC_DOMAIN"]}/api`
  : "http://localhost:5000/api";

async function setupAndroidChannel(): Promise<void> {
  if (Platform.OS !== "android") return;
  await Notifications.setNotificationChannelAsync("default", {
    name: "Default",
    importance: Notifications.AndroidImportance.DEFAULT,
    vibrationPattern: [0, 250, 250, 250],
  });
}

async function registerTokenWithServer(token: string): Promise<void> {
  const response = await fetch(`${API_BASE}/tokens`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token,
      platform: Platform.OS === "ios" ? "ios" : "android",
    }),
  });
  if (!response.ok) {
    const body = await response.text().catch(() => "(unreadable)");
    console.warn(
      `[PushNotifications] Token registration failed: HTTP ${response.status} — ${body}`,
    );
  }
}

export async function registerForPushNotificationsAsync(): Promise<
  string | null
> {
  if (Platform.OS === "web") {
    return null;
  }

  await setupAndroidChannel();

  const { status: existingStatus } =
    await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    console.info("[PushNotifications] Permission denied — skipping registration");
    return null;
  }

  try {
    const tokenData = await Notifications.getExpoPushTokenAsync();
    const token = tokenData.data;
    await registerTokenWithServer(token);
    return token;
  } catch (err) {
    console.warn("[PushNotifications] Failed to get or register push token:", err);
    return null;
  }
}
