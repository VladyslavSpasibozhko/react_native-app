import React from "react";
import TableItem from "./tableItem/TableItem";

const Table = ({ data }) => {
  return (
    <>
      {data.map((user, key) => (
        <TableItem key={key} user={user} />
      ))}
    </>
  );
};

export default Table;
