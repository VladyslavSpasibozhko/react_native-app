import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./listItem.style";
import { getNationality, getUserName } from "../../../../../utils/utils";
import { globalStyles } from "../../../../../styles/global";

const ListItem = ({ user }) => {
  const {
    cardWrap,
    avatar,
    avatarImage,
    userInfo,
    userNat,
    userNatText,
    userPhone,
  } = styles;

  return (
    <View style={cardWrap}>
      <View style={avatar}>
        <Image
          style={avatarImage}
          source={{
            uri: user.picture.medium,
          }}
        />
      </View>
      <View style={userInfo}>
        <Text style={globalStyles.font17}>{getUserName(user.name)}</Text>
        <Text style={userPhone}>{user.phone}</Text>
      </View>
      <View style={[userNat, { backgroundColor: "red" }]}>
        <Text style={userNatText}>{getNationality(user.nat).name}</Text>
      </View>
    </View>
  );
};

export default ListItem;
