import Article from "@/components/article/Article";
import HeaderArticles from "@/components/article/HeaderArticles";
import BottomSheet from "@/components/BottomSheet";
import Category from "@/components/Category";
import Divider from "@/components/Divider";
import Icon from "@/components/Icon";
import Screen from "@/components/Screen";
import { categories } from "@/constants/config";
import useDivideArticles from "@/hooks/useDivideArticles";
import { useFeedContext } from "@/hooks/useFeedContext";
import useGetFeedQuery from "@/hooks/useGetFeedQuery";
import { LegendList } from "@legendapp/list";
import { router, Stack } from "expo-router";
import { useState } from "react";
import { FlatList, RefreshControl as Refresh, StyleSheet } from "react-native";

const HomeScreen = () => {
  const [sheetVisible, setSheetVisible] = useState<boolean>(false);
  const { selectedCategory, setSelectedCategory } = useFeedContext();
  const { data: feed, refetch } = useGetFeedQuery(selectedCategory);
  const options = Object.keys(categories);
  const { mainArticle, subArticles, remainingArticles } = useDivideArticles(
    feed?.items ?? []
  );

  const closeSheet = () => setSheetVisible(false);
  const toggleSheet = () => setSheetVisible((bool) => !bool);
  const goToArticle = (id: string) => router.push(`/article/${id}`);

  const headerLeft = () => (
    <Icon name="menu-outline" onPress={toggleSheet} style={styles.headerLeft} />
  );

  const listHeader = () => (
    <HeaderArticles
      mainArticle={mainArticle}
      subArticles={subArticles}
      goToArticle={goToArticle}
    />
  );

  return (
    <Screen>
      {/* Header options */}
      <Stack.Screen options={{ headerLeft }} />

      {/* Articles */}
      <LegendList
        data={remainingArticles}
        estimatedItemSize={110}
        recycleItems
        keyExtractor={(item) => item.guid}
        refreshControl={<Refresh refreshing={false} onRefresh={refetch} />}
        ListHeaderComponent={listHeader}
        ItemSeparatorComponent={() => <Divider style={styles.divider} />}
        renderItem={({ item: article }) => (
          <Article
            article={article}
            onPress={() => goToArticle(article.guid)}
          />
        )}
      />

      {/* Category selector */}
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
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
  listStyle: {
    gap: 10,
    marginTop: 30,
  },
  divider: {
    marginVertical: 5,
  },
  headerLeft: {
    height: 36,
    width: 36,
  },
});
