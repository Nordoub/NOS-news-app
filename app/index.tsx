import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  FlatList,
} from "react-native";
import { router, Stack } from "expo-router";
import useGetFeedQuery from "@/hooks/useGetFeedQuery";
import { categories } from "@/constants/config";
import { useFeedContext } from "@/hooks/useFeedContext";
import Screen from "@/components/Screen";
import Image from "@/components/Image";
import HeaderArticle from "@/components/HeaderArticle";
import SubArticle from "@/components/SubArticle";
import useDivideArticles from "@/hooks/useDivideArticles";
import Article from "@/components/Article";
import Divider from "@/components/Divider";
import { useState } from "react";
import BottomSheet from "@/components/BottomSheet";
import Category from "@/components/Category";
import Icon from "@/components/Icon";

const HomeScreen = () => {
  const [sheetVisible, setSheetVisible] = useState<boolean>(false);
  const { selectedCategory, setSelectedCategory } = useFeedContext();
  const { data: feed } = useGetFeedQuery(selectedCategory);
  const { height } = useWindowDimensions();
  const options = Object.keys(categories);
  const { headerArticle, subArticles, remainingArticles } = useDivideArticles(
    feed?.items ?? []
  );

  const closeSheet = () => setSheetVisible(false);
  const toggleSheet = () => setSheetVisible((bool) => !bool);

  return (
    <Screen>
      <Stack.Screen
        name="index"
        options={{
          headerBackTitle: "Home",
          headerLeft: () => <Icon name="menu-outline" onPress={toggleSheet} />,
          headerRight: () => (
            <Icon
              name="search-outline"
              onPress={() => router.push("/search")}
            />
          ),
          headerTitleAlign: "center",
          headerTitle: () => (
            <Image
              source={require("@/assets/images/logo-small.png")}
              contentFit="contain"
            />
          ),
        }}
      />
      <ScrollView>
        <HeaderArticle
          imgUrl={headerArticle.image ?? null}
          title={headerArticle.title ?? ""}
          height={height / 3}
          onPress={() => router.push(`/article/${headerArticle.guid}`)}
        />
        <View style={styles.subArticles}>
          {subArticles.map((article, index) => (
            <SubArticle
              key={`${article.guid}${index}`}
              imgUrl={article.image}
              title={article.title}
              height={height / 6}
              onPress={() => router.push(`/article/${article.guid}`)}
            />
          ))}
        </View>
        {remainingArticles.map((article) => (
          <View key={article.guid} style={{ marginHorizontal: 10 }}>
            <Divider style={{ marginVertical: 10 }} />
            <Article
              imgUrl={article.image}
              title={article.title}
              height={100}
              width={100}
              onPress={() => router.push(`/article/${article.guid}`)}
            />
          </View>
        ))}
      </ScrollView>
      <BottomSheet
        visible={sheetVisible}
        hideHandle
        onClose={closeSheet}
        snapPoints={["85%"]}
      >
        <FlatList
          numColumns={2}
          data={options}
          renderItem={({ item }) => (
            <Category
              key={item}
              title={item}
              isSelected={categories[item] === selectedCategory}
              onPress={() => {
                setSelectedCategory(categories[item]);
                closeSheet();
              }}
            />
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.listStyle}
        />
      </BottomSheet>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  subArticles: {
    flexDirection: "row",
    gap: 10,
    margin: 10,
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
    backgroundColor: "red",
  },
  listStyle: {
    gap: 10,
    marginTop: 30,
  },
});
