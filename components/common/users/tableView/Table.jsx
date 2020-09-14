import React from "react";
import TableItem from "./tableItem/TableItem";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../models/rootModel";
import { View } from "react-native";

const Table = ({ navigation }) => {
  const store = useStore();

  return (
    <View>
      {store.users.map((user, key) => (
        <TableItem navigation={navigation} key={key} user={user} />
      ))}
    </View>
  );
};

export default observer(Table);
