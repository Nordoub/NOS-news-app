import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

const useHeader = (options: NativeStackNavigationOptions) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      ...options,
    });
  }, [options, navigation]);
};

export default useHeader;
