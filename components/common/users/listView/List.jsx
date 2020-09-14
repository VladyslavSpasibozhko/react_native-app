import React from "react";
import ListItem from "./listItem/ListItem";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../models/rootModel";
import { View } from "react-native";

const List = ({ navigation }) => {
  const store = useStore();

  return (
    <View>
      {store.users.map((user, key) => (
        <ListItem navigation={navigation} key={key} user={user} />
      ))}
    </View>
  );
};

export default observer(List);
