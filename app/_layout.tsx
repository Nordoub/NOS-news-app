import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="detail" />
      <Stack.Screen name="search" />
    </Stack>
  );
}
