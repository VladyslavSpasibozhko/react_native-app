import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import { Store, appStore } from "./models/rootModel";
import Home from "./screens/Home";
import Contacts from "./components/sections/center/Contacts";
import ContactsPage from "./screens/contacts/Contacts";
import colors from "./styles/colors";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Store.Provider value={appStore}>
        <Tab.Navigator
          initialRouteName="Contacts"
          tabBarOptions={{
            activeTintColor: colors.white,
            inactiveTintColor: colors.secondaryDark,
            labelPosition: "beside-icon",
            activeBackgroundColor: colors.main,
            inactiveBackgroundColor: colors.white,
          }}
        >
          <Tab.Screen name={"Home"} component={Home} />
          <Tab.Screen name={"Contacts"} component={ContactsPage} />
        </Tab.Navigator>
      </Store.Provider>
    </NavigationContainer>
  );
}
