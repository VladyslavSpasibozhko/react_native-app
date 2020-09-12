import React from "react";
import { View } from "react-native";
import SearchByName from "./searchByName/SearchByName";
import SearchByGender from "./searchByGender/SearchByGender";
import SearchByNationality from "./searchByNationality/SearchByNationality";
import { styles } from "./top.style";

const Top = () => {
  return (
    <View style={styles.topSection}>
      <SearchByName />
      <SearchByGender />
      <SearchByNationality />
    </View>
  );
};

export default Top;
