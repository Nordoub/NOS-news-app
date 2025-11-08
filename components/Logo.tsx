import React from "react";
import Image from "./Image";

const Logo = () => {
  return (
    <Image
      source={require("@/assets/images/logo-small.png")}
      contentFit="contain"
    />
  );
};

export default Logo;
