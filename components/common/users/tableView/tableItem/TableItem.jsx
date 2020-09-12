import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./tableItem.style";
import colors from "../../../../../styles/colors";
import { getNationality } from "../../../../../utils/utils";

const TableItem = ({ user }) => {
  return (
    <View style={styles.cardWrap}>
      <View style={styles.cardHeader}>
        <Image style={styles.image} source={{ uri: user.picture.large }} />
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>
            {Object.values(user.name).join(" ")}
          </Text>
          <Text style={[styles.userNat, { backgroundColor: "red" }]}>
            {getNationality(user.nat).name}
          </Text>
        </View>
        <View>
          <Text style={styles.userPhone}>Phone: {user.phone}</Text>
        </View>
        <View>
          <Text style={{ color: colors.main, alignSelf: "flex-end" }}>
            Details
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TableItem;
