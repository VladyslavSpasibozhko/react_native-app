import React from "react";
import Header from "./components/header/Header";
import Search from "./components/sections/top/Search";
import Contacts from "./components/sections/center/Contacts";
import { Store, store } from "./models/rootModel";
import { StyleSheet, ScrollView } from "react-native";

export default function App() {
  return (
    <Store.Provider value={store}>
      <ScrollView style={styles.container}>
        <Header />
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
