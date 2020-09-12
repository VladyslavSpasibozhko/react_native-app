import { StyleSheet } from "react-native";
import colors from "./colors";

export const globalStyles = StyleSheet.create({
  input: {
    borderRadius: 5,
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  container: {
    paddingHorizontal: 20,
  },
  alignCenterMiddle: {
    justifyContent: "center",
    alignItems: "center",
  },
  colorWhite: {
    color: colors.white,
  },
  colorSecondary: {
    color: colors.secondary,
  },
  colorPrimary: {
    color: colors.main,
  },
  font15: {
    fontSize: 15,
  },
  font16: {
    fontSize: 16,
  },
  font17: {
    fontSize: 17,
  },
  font18: {
    fontSize: 18,
  },
  font19: {
    fontSize: 19,
  },
});
