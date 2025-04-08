import { StyleSheet, FlatList, RefreshControl } from "react-native";
import { router, Stack } from "expo-router";
import useGetFeedQuery from "@/hooks/useGetFeedQuery";
import { categories } from "@/constants/config";
import { useFeedContext } from "@/hooks/useFeedContext";
import Screen from "@/components/Screen";
import useDivideArticles from "@/hooks/useDivideArticles";
import Article from "@/components/article/Article";
import { useCallback, useState } from "react";
import BottomSheet from "@/components/BottomSheet";
import Category from "@/components/Category";
import Icon from "@/components/Icon";
import { LegendList } from "@legendapp/list";
import HeaderArticles from "@/components/article/HeaderArticles";

const HomeScreen = () => {
  const [sheetVisible, setSheetVisible] = useState<boolean>(false);
  const { selectedCategory, setSelectedCategory } = useFeedContext();
  const { data: feed, isFetching, refetch } = useGetFeedQuery(selectedCategory);
  const options = Object.keys(categories);
  const { mainArticle, subArticles, remainingArticles } = useDivideArticles(
    feed?.items ?? []
  );

  const closeSheet = () => setSheetVisible(false);
  const toggleSheet = () => setSheetVisible((bool) => !bool);
  const goToArticle = (id: string) => router.push(`/article/${id}`);

  const headerLeft = useCallback(
    () => <Icon name="menu-outline" onPress={toggleSheet} />,
    []
  );

  const listHeader = useCallback(
    () => (
      <HeaderArticles
        mainArticle={mainArticle}
        subArticles={subArticles}
        goToArticle={goToArticle}
      />
    ),
    [mainArticle, subArticles]
  );

  return (
    <Screen>
      {/* Header options */}
      <Stack.Screen options={{ headerLeft }} />

      {/* Articles*/}
      <LegendList
        data={remainingArticles}
        estimatedItemSize={110}
        recycleItems
        keyExtractor={(item) => item.guid}
        renderItem={({ item: article }) => (
          <Article
            article={article}
            onPress={() => goToArticle(article.guid)}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }
        ListHeaderComponent={listHeader}
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
});
