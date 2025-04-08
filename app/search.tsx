import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";
import useFilteredArticles from "@/hooks/useFilteredArticles";
import Article from "@/components/article/Article";
import Screen from "@/components/Screen";

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const searchResults = useFilteredArticles(searchValue);

  const onChangeText = (e: NativeSyntheticEvent<TextInputFocusEventData>) =>
    setSearchValue(e.nativeEvent.text);

  const onClearText = () => setSearchValue("");

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerSearchBarOptions: {
            placeholder: "Search",
            autoFocus: true,
            onChangeText: onChangeText,
            onClose: onClearText,
            onCancelButtonPress: onClearText,
          },
        }}
      />
      <FlatList
        data={searchResults}
        renderItem={({ item: article }) => (
          <Article
            article={article}
            onPress={() => router.push(`/article/${article.guid}`)}
          />
        )}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item) => `${item.guid}-search`}
      />
    </Screen>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  list: {
    margin: 10,
    marginTop: 10,
  },
  listContent: {
    gap: 10,
  },
});
