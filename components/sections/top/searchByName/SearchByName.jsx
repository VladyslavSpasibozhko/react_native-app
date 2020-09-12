import React, { useState } from "react";
import { View, TextInput, Text, TouchableHighlight } from "react-native";
import { styles } from "./searchByName.style";
import { globalStyles } from "../../../../styles/global";

const SearchByName = () => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="Search name"
        placeholderTextColor={"#000"}
        style={[styles.searchInput, globalStyles.input]}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#1051A7"
        style={styles.button}
        onPress={() => {
          alert(value);
          setValue("");
        }}
      >
        <Text style={styles.text}>S</Text>
      </TouchableHighlight>
    </View>
  );
};

export default SearchByName;
