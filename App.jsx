import React from "react";
import Header from "./components/header/Header";
import Search from "./components/sections/top/Search";
import Contacts from "./components/sections/center/Contacts";
import { Store, appStore } from "./models/rootModel";
import { StyleSheet, ScrollView } from "react-native";

export default function App() {
  return (
    <Store.Provider value={appStore}>
      <Header />
      <ScrollView style={styles.container}>
        <Search />
        <Contacts />
      </ScrollView>
    </Store.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
