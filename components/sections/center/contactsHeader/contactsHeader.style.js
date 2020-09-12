import { StyleSheet, Platform } from "react-native";
import colors from "../../../../styles/colors";

export const styles = StyleSheet.create({
  box: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonsGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 5,
  },
  button: {
    padding: 15,
  },
});
