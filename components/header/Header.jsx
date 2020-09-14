import React from "react";
import { View, Image, ImageBackground } from "react-native";
import { styles } from "./header.style";
import image from "../../assets/images/wezom-logo.png";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.right}>
        {/*<Image style={styles.image} source={image} />*/}
      </View>
    </View>
  );
};

export default Header;
