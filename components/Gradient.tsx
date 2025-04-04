import React, { memo } from "react";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

const bottomShadow = {
  colors: ["#00000000", "#000000"] as [string, string],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
  position: { bottom: 0 },
};

const topShadow = {
  colors: ["#000000", "#00000000"] as [string, string],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0.8 },
  position: { top: 0 },
};

type Props = {
  startFrom?: "top" | "bottom";
} & Partial<LinearGradientProps>;

const Gradient = ({ startFrom, ...otherProps }: Props) => {
  const shadow = startFrom === "top" ? topShadow : bottomShadow;
  return (
    <LinearGradient
      colors={shadow.colors}
      start={shadow.start}
      end={shadow.end}
      style={{
        height: "50%",
        width: "100%",
        position: "absolute",
        ...shadow.position,
      }}
      {...otherProps}
    />
  );
};

export default memo(Gradient);
