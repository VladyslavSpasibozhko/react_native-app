import React from "react";
import ListItem from "./listItem/ListItem";

const List = ({ data }) => {
  return (
    <>
      <>
        {data.map((user, key) => (
          <ListItem key={key} user={user} />
        ))}
      </>
    </>
  );
};

export default List;
