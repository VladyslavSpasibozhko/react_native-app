import React from "react";
import Table from "../../../common/users/tableView/Table";
import List from "../../../common/users/listView/List";
import { View } from "react-native";

import user from "../../../../assets/user.json";

const data = new Array(10).fill(user);

const ContactsBody = () => {
  const view = "list";

  return (
    <View>
      {view === "gallery" ? <Table data={data} /> : <List data={data} />}
    </View>
  );
};

export default ContactsBody;
