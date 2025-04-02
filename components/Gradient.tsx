import React, { memo } from "react";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

const Gradient = ({ colors, ...otherProps }: Partial<LinearGradientProps>) => {
  return (
    <LinearGradient
      colors={colors ?? ["#00000000", "#000000"]}
      style={{
        height: "50%",
        width: "100%",
        position: "absolute",
        bottom: 0,
      }}
      {...otherProps}
    />
  );
};

export default memo(Gradient);
