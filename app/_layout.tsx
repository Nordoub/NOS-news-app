import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import FeedProvider from "@/context/FeedProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack, useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const queryClient = new QueryClient();

export default function RootLayout() {
  const router = useRouter();

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
                    onPress={() => router.navigate("/search")}
                    style={{ height: 36, width: 36 }}
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
