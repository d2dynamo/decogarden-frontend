import { Stack } from "expo-router";
import "../global.css";
import { ThemeProvider } from "@react-navigation/native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
