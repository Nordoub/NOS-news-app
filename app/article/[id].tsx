import Icon from "@/components/Icon";
import { isLiquidGlass } from "@/constants/config";
import { COLORS, FONT_SIZES } from "@/constants/theme";
import useArticle from "@/hooks/useArticle";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("window");
const IMG_HEIGHT = height / 3;

const ArticleDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const article = useArticle(id);

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.5], [0, 1]),
    };
  });

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerBackButtonDisplayMode: "minimal",
          headerLeft: () => (
            <Icon
              style={styles.backButton}
              size={32}
              color={COLORS.blue}
              onPress={() => router.back()}
              name="arrow-back"
            />
          ),
          headerBackground: () => (
            <Animated.View style={[styles.header, headerAnimatedStyle]} />
          ),
        }}
      />
      <Animated.ScrollView
        style={styles.container}
        ref={scrollRef}
        scrollEventThrottle={16}
      >
        <View style={{ zIndex: 2 }}>
          <Animated.Image
            source={{
              uri: article?.image ?? "",
            }}
            style={[styles.image, imageAnimatedStyle]}
          />
        </View>
        <View style={styles.textContent}>
          <Text style={styles.date}>{article?.pubDate}</Text>
          <Text style={styles.title}>{article?.title}</Text>
          <Text>{article?.description}</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default ArticleDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  textContent: {
    padding: 20,
    gap: 10,
    zIndex: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: FONT_SIZES.x2l,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  backButton: {
    borderRadius: 100,
    backgroundColor: isLiquidGlass ? "transparent" : "white",
    padding: 2,
  },
  date: {
    fontWeight: "bold",
    color: COLORS.grey,
    fontSize: FONT_SIZES.xs,
  },
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
  header: {
    backgroundColor: "#fff",
    height: 100,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
