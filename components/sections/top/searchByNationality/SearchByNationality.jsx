import React, { useState } from "react";
import { View, FlatList, TextInput, Text } from "react-native";
import { NATIONALITIES } from "../../../../constants/nationalities";
import { styles } from "./searchByNationality.style";
import { globalStyles } from "../../../../styles/global";

const Item = ({ item }) => (
  <View style={styles.listItem}>
    <Text>{item.name}</Text>
  </View>
);

const SearchByNationality = () => {
  const [selected, setSelected] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);

  const onInput = (text) => setInputValue(text);

  return (
    <View style={styles.box}>
      <View style={[styles.nationalityInput, globalStyles.input]}>
        <TextInput
          placeholder="Nationality"
          placeholderTextColor="#000"
          value={inputValue}
          onChangeText={onInput}
          onFocus={() => setInputFocus(true)}
        />
      </View>
      {inputFocus && (
        <View>
          <FlatList
            style={styles.list}
            data={NATIONALITIES}
            renderItem={Item}
            keyExtractor={(item) => item.iconCode}
          />
        </View>
      )}
    </View>
  );
};

export default SearchByNationality;
