import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
} from "react";
import {
  StyleSheet,
  ViewStyle,
  StyleProp,
  InteractionManager,
} from "react-native";
import {
  default as GorhomBottomSheet,
  BottomSheetView,
  BottomSheetProps,
  BottomSheetBackdrop,
  BottomSheetHandle,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SPACING } from "@/constants/theme";

type Props = {
  visible: boolean;
  hideHandle?: boolean;
  enableDynamicSizing?: boolean;
  style?: StyleProp<ViewStyle>;
} & BottomSheetProps;

const BottomSheet = ({
  children,
  visible,
  hideHandle,
  enableDynamicSizing,
  style,
  ...bottomSheetProps
}: PropsWithChildren<Props>) => {
  const bottomSheetRef = useRef<GorhomBottomSheet>(null);
  const navigation = useNavigation();

  const open = () => bottomSheetRef?.current?.expand();
  const close = () => bottomSheetRef?.current?.close();

  useEffect(() => (visible ? open() : close())), [visible];

  // Close the bottomsheet after we navigate to another screen
  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      InteractionManager.runAfterInteractions(() => {
        close();
      });
    });

    return unsubscribe;
  }, [navigation]);

  const renderBackdrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        disappearsOnIndex={-1}
        appearsOnIndex={1}
        onPress={close}
        {...props}
      />
    ),
    []
  );

  return (
    <GorhomBottomSheet
      ref={bottomSheetRef}
      index={-1}
      enableDynamicSizing={enableDynamicSizing}
      handleIndicatorStyle={{ backgroundColor: COLORS.mediumgrey }}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      handleComponent={hideHandle ? null : BottomSheetHandle}
      {...bottomSheetProps}
      style={{ zIndex: 100 }}
    >
      <BottomSheetView
        style={[$.content, { flex: enableDynamicSizing ? 0 : 1 }, style]}
      >
        {children}
      </BottomSheetView>
    </GorhomBottomSheet>
  );
};

const $ = StyleSheet.create({
  content: {
    paddingHorizontal: SPACING.m,
    paddingBottom: SPACING.s,
  },
});

export default BottomSheet;
