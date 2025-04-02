import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import useArticle from "@/hooks/useArticle";
import { router, useLocalSearchParams } from "expo-router";
import Image from "@/components/Image";
import { COLORS, DEFAULT_HITSLOP, FONT_SIZES } from "@/constants/theme";
import Entypo from "@expo/vector-icons/Entypo";

const ArticleDetailsScreen = () => {
  const { height } = useWindowDimensions();
  const { id } = useLocalSearchParams<{ id: string }>();
  const article = useArticle(id);

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        barStyle={"light-content"}
      />
      <TouchableOpacity
        style={styles.backButton}
        hitSlop={DEFAULT_HITSLOP}
        onPress={() => router.back()}
      >
        <Entypo name="chevron-small-left" size={48} color={COLORS.white} />
      </TouchableOpacity>
      <Image
        source={article?.image}
        style={{ height: height / 3, resizeMode: "cover" }}
        transition={150}
      />
      <View style={styles.textContent}>
        <Text style={styles.date}>{article?.pubDate}</Text>
        <Text style={styles.title}>{article?.title}</Text>
        <Text>{article?.description}</Text>
      </View>
    </ScrollView>
  );
};

export default ArticleDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  textContent: {
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: FONT_SIZES.x2l,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 5,
    zIndex: 20,
  },
  date: {
    fontWeight: "bold",
    color: COLORS.grey,
    fontSize: FONT_SIZES.xs,
  },
});
