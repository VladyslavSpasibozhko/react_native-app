import React from "react";
import { View } from "react-native";
import SearchByName from "./searchByName/SearchByName";
import SearchByGender from "./searchByGender/SearchByGender";
import SearchByNationality from "./searchByNationality/SearchByNationality";

const Search = () => {
  return (
    <View>
      <SearchByName />
      <SearchByGender />
      {/*<SearchByNationality />*/}
    </View>
  );
};

export default Search;
