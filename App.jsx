import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/header/Header";
import Top from "./components/sections/top/Top";

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Top/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
