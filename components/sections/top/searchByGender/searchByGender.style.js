import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  selectBox: { marginTop: 20, padding: Platform.OS === "ios" ? 20 : 0 },
});
