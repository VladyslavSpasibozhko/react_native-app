import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Table from "../../../common/users/tableView/Table";
import List from "../../../common/users/listView/List";
import { View } from "react-native";
import { useStore } from "../../../../models/rootModel";

const ContactsBody = () => {
  const store = useStore();

  useEffect(() => {
    store.getUsers();
  }, []);

  return (
    <View>
      {store.getView() === "gallery" ? (
        <Table data={store.users} />
      ) : (
        <List data={store.users} />
      )}
    </View>
  );
};

export default observer(ContactsBody);
