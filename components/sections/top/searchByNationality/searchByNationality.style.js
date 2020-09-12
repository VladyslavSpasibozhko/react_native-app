import { Platform, StyleSheet } from "react-native";
import colors from "../../../../styles/colors";

const isIOS = Platform.OS === "ios";

export const styles = StyleSheet.create({
  box: {
    marginTop: 20,
  },
  nationalityInput: {
    padding: isIOS ? 20 : 10,
    fontSize: isIOS ? 14 : 16,
  },
  listWrap: {
    backgroundColor: "#d0d2d7",
  },
  list: {
    maxHeight: 250,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    overflow: "hidden",
  },
  listItem: {
    padding: 5,
    height: 40,
  },
});
