import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./tableItem.style";
import colors from "../../../../../styles/colors";
import { getNationality, getUserName } from "../../../../../utils/utils";

const TableItem = ({ user, navigation }) => {
  const {
    cardWrap,
    cardHeader,
    image,
    cardFooter,
    userInfo,
    userName,
    userNat,
    userPhone,
    userNatWrap,
  } = styles;

  const { name, color = colors.main } = getNationality(user.nat);

  return (
    <View style={cardWrap}>
      <View style={cardHeader}>
        <Image style={image} source={{ uri: user.picture.large }} />
      </View>
      <View style={cardFooter}>
        <View style={userInfo}>
          <Text
            style={userName}
            onPress={() =>
              navigation.navigate("ContactCard", {
                userId: user.login.uuid,
              })
            }
          >
            {getUserName(user.name)}
          </Text>
          <View style={[{ backgroundColor: color }, userNatWrap]}>
            <Text style={userNat}>{name}</Text>
          </View>
        </View>
        <View>
          <Text style={userPhone}>Phone: {user.phone}</Text>
        </View>
      </View>
    </View>
  );
};

export default TableItem;
