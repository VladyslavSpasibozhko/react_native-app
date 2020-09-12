import React from "react";
import ListItem from "./listItem/ListItem";
import { observer } from "mobx-react-lite";

const List = ({ data }) => {
  return (
    <>
      {data.map((user, key) => (
        <ListItem key={key} user={user} />
      ))}
    </>
  );
};

export default observer(List);
