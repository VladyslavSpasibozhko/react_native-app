import React from "react";
import { observer } from "mobx-react-lite";
import { View, Image, Text } from "react-native";
import { getNationality, getUserName } from "../../../../../utils/utils";

import { styles } from "./listItem.style";
import { globalStyles } from "../../../../../styles/global";
import colors from "../../../../../styles/colors";

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

  const { name, color = colors.main } = getNationality(user.nat);

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
      <View style={[userNat, { backgroundColor: color }]}>
        <Text style={userNatText}>{name}</Text>
      </View>
    </View>
  );
};

export default observer(ListItem);
