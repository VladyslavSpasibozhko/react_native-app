import React from "react";
import { View, Image, Text } from "react-native";
import { observer } from "mobx-react-lite";
import { getNationality, getUserName } from "../../../../../utils/utils";

import { globalStyles } from "../../../../../styles/global";
import { styles } from "./listItem.style";
import colors from "../../../../../styles/colors";

const ListItem = ({ user, navigation }) => {
  const {
    cardWrap,
    avatar,
    avatarImage,
    userInfo,
    userName,
    userNatText,
    userNat,
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
        <Text
          style={[globalStyles.font17, userName]}
          onPress={() =>
            navigation.navigate("ContactCard", {
              userId: user.login.uuid,
            })
          }
        >
          {getUserName(user.name)}
        </Text>
        <Text style={userPhone}>{user.phone}</Text>
      </View>
      <View style={[userNat, { backgroundColor: color }]}>
        <Text style={userNatText}>{name}</Text>
      </View>
    </View>
  );
};

export default observer(ListItem);
