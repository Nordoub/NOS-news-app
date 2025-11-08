import { Image as ExpoImage, ImageProps } from "expo-image";
import React, { memo } from "react";

type Props = {
  height?: number;
  width?: number;
} & ImageProps;

const Image = ({ height = 50, width = 50, ...imageProps }: Props) => {
  return (
    <ExpoImage style={{ height, width }} contentFit="cover" {...imageProps} />
  );
};

export default memo(Image);
