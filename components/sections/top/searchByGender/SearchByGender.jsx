import React, { useState } from "react";
import { View } from "react-native";
import Picker from "react-native-picker-select";
import { styles } from "./searchByGender.style";
import { globalStyles } from "../../../../styles/global";

const genderData = [
  { value: "", label: "Gender", key: "gender" },
  { value: "male", label: "Male", key: "male" },
  { value: "female", label: "Female", key: "female" },
  { value: "indeterminate", label: "Indeterminate", key: "indeterminate" },
];

const SearchByGender = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const onChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <View style={[styles.selectBox, globalStyles.input]}>
      <Picker
        placeholder={{}}
        value={selectedValue}
        onValueChange={onChange}
        items={genderData}
      />
    </View>
  );
};

export default SearchByGender;
