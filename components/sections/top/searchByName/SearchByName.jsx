import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, TextInput, TouchableHighlight } from "react-native";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { styles } from "./searchByName.style";
import { globalStyles } from "../../../../styles/global";
import colors from "../../../../styles/colors";

const SearchByName = () => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="Search name"
        placeholderTextColor={colors.black}
        style={[styles.searchInput, globalStyles.input]}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={colors.pressedColor}
        style={styles.button}
        onPress={() => {
          alert(value);
          setValue("");
        }}
      >
        <FontAwesomeIcon icon={faSearch} style={globalStyles.colorWhite} />
      </TouchableHighlight>
    </View>
  );
};

export default SearchByName;
