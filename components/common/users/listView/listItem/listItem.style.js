import { StyleSheet } from "react-native";
import colors from "../../../../../styles/colors";

export const styles = StyleSheet.create({
  cardWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
    marginVertical: 10,
    paddingVertical: 15,
  },
  avatar: {
    borderRadius: 50,
    overflow: "hidden",
  },
  avatarImage: {
    width: 50,
    height: 50,
  },
  userInfo: {
    flex: 1,
    paddingHorizontal: 20,
  },
  userPhone: {
    color: colors.secondaryDark,
    marginTop: 5,
  },
  userNat: {
    borderRadius: 5,
    padding: 5,
  },
  userNatText: {
    color: colors.white,
  },
  userName: {
    color: colors.main,
  },
});
