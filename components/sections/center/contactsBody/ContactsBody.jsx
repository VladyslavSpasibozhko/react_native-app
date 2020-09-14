import React, { useEffect } from "react";
import Table from "../../../common/users/tableView/Table";
import List from "../../../common/users/listView/List";

import { observer } from "mobx-react-lite";
import { useStore } from "../../../../models/rootModel";

const ContactsBody = ({ navigation }) => {
  const store = useStore();

  useEffect(() => {
    store.getUsers();
  }, []);

  return (
    <>
      {store.getView() === "list" ? (
        <List navigation={navigation} />
      ) : (
        <Table navigation={navigation} />
      )}
    </>
  );
};

export default observer(ContactsBody);
