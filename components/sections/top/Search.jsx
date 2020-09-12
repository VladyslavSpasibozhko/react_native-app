import React from "react";
import { View } from "react-native";
import SearchByName from "./searchByName/SearchByName";
import SearchByGender from "./searchByGender/SearchByGender";
import SearchByNationality from "./searchByNationality/SearchByNationality";
import { styles } from "./search.style";

const Search = () => {
  return (
    <View style={styles.topSection}>
      <SearchByName />
      <SearchByGender />
      {/*<SearchByNationality />*/}
    </View>
  );
};

export default Search;
