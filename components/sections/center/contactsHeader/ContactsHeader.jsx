import React from "react";
import Button from "./Button";
import { Text, View } from "react-native";
import { faThList, faTh } from "@fortawesome/free-solid-svg-icons";
import { styles } from "./contactsHeader.style";
import { globalStyles } from "../../../../styles/global";

const buttons = [
  {
    icon: faThList,
    type: "list",
  },
  {
    icon: faTh,
    type: "gallery",
  },
];

const ContactsHeader = () => {
  return (
    <View style={styles.box}>
      <Text style={globalStyles.font18}>Contacts</Text>
      <View style={styles.buttonsGroup}>
        {buttons.map(({ icon, type }) => (
          <Button icon={icon} type={type} key={type} />
        ))}
      </View>
    </View>
  );
};

export default ContactsHeader;
