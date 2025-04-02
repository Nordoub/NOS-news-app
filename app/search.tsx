import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { router, Stack, useRouter } from "expo-router";
import useFilteredArticles from "@/hooks/useFilteredArticles";
import Article from "@/components/Article";
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
          title: "Search",
          headerSearchBarOptions: {
            placeholder: "Search",
            onChangeText: onChangeText,
            autoFocus: true,
            onCancelButtonPress: onClearText,
            onClose: onClearText,
          },
        }}
      />
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <Article
            imgUrl={item?.image ?? null}
            title={item?.title ?? ""}
            height={100}
            width={100}
            onPress={() => router.push(`/article/${item.guid}`)}
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
