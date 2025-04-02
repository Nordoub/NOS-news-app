import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FeedProvider from "@/context/FeedProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <FeedProvider>
          <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="search" />
            <Stack.Screen
              name="article/[id]"
              options={{ headerShown: false }}
            />
          </Stack>
        </FeedProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
