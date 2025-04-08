import { router, Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FeedProvider from "@/context/FeedProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <FeedProvider>
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                headerTitleAlign: "center",
                headerTitle: () => <Logo />,
                headerRight: () => (
                  <Icon
                    name="search-outline"
                    onPress={() => router.push("/search")}
                  />
                ),
              }}
            />
            <Stack.Screen name="search" options={{ title: "Search" }} />
            <Stack.Screen name="article/[id]" />
          </Stack>
        </FeedProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
