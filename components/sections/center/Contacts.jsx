import React from "react";
import ContactsHeader from "./contactsHeader/ContactsHeader";
import ContactsBody from "./contactsBody/ContactsBody";
import { View, ScrollView } from "react-native";
import { globalStyles } from "../../../styles/global";

import { createStackNavigator } from "@react-navigation/stack";
import ContactCard from "../../../screens/contacts/ContactCard";
import Search from "../top/Search";

const Stack = createStackNavigator();

const AllContacts = ({ navigation }) => (
  <View style={[globalStyles.container, { flex: 1 }]}>
    <Search />
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ContactsHeader />
      <ContactsBody navigation={navigation} />
    </ScrollView>
  </View>
);

const Contacts = () => {
  return (
    <Stack.Navigator initialRouteName="Contacts">
      <Stack.Screen
        name="Contacts"
        component={AllContacts}
        screenOptions={{
          headerTitle: "Contacts",
        }}
      />
      <Stack.Screen
        name={"ContactCard"}
        component={ContactCard}
        screenOptions={{
          headerTitle: "ContactCard",
        }}
      />
    </Stack.Navigator>
  );
};

export default Contacts;
