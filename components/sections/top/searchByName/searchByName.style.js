import { StyleSheet, Platform } from "react-native";
import colors from "../../../../styles/colors";
const isIOS = Platform.OS === "ios";

export const styles = StyleSheet.create({
  block: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchInput: {
    padding: isIOS ? 20 : 10,
    flex: 1,
    fontSize: isIOS ? 14 : 16,
    marginRight: 10,
  },
  button: {
    backgroundColor: colors.main,
    padding: 5,
    borderRadius: 5,
    width: isIOS ? 59 : 50,
    height: isIOS ? 59 : 50,
  },
  text: {
    color: colors.white,
  },
});
