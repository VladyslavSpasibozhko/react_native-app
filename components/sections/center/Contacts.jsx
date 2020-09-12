import React from "react";
import ContactsHeader from "./contactsHeader/ContactsHeader";
import ContactsBody from "./contactsBody/ContactsBody";
import { View } from "react-native";
import { globalStyles } from "../../../styles/global";

const Contacts = () => {
  return (
    <View style={globalStyles.container}>
      <ContactsHeader />
      <ContactsBody />
    </View>
  );
};

export default Contacts;
