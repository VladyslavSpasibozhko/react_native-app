import { StyleSheet } from "react-native";
import colors from "../../../../../styles/colors";

export const styles = StyleSheet.create({
  cardWrap: {
    backgroundColor: colors.secondaryLight,
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  cardHeader: { alignItems: "center", justifyContent: "center" },
  image: {
    borderRadius: 100,
    width: 200,
    height: 200,
  },
  cardFooter: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 18,
  },
  userNat: {
    color: colors.white,
    padding: 5,
    borderRadius: 5,
  },
  userPhone: {
    paddingVertical: 5,
  },
});
