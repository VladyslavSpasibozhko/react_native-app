import React from "react";
import { View, Text } from "react-native";

const ContactCard = ({ route }) => {
  return (
    <View>
      <Text>{JSON.stringify(route)}</Text>
    </View>
  );
};

export default ContactCard;
