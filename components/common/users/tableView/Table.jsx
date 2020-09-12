import React from "react";
import TableItem from "./tableItem/TableItem";
import { observer } from "mobx-react-lite";

const Table = ({ data }) => {
  return (
    <>
      {data.map((user, key) => (
        <TableItem key={key} user={user} />
      ))}
    </>
  );
};

export default observer(Table);
