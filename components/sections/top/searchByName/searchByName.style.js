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
    padding: isIOS ? 20 : 16,
    borderRadius: 5,
  },
});
