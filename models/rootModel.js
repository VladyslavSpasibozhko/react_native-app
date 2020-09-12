import { createContext, useContext } from "react";
import { types, onSnapshot, flow } from "mobx-state-tree";
import { UserModel } from "./user/userModel";

const RootModel = types
  .model("RootModel", {
    users: types.optional(types.array(UserModel), []),
  })
  .actions((self) => ({
    getUsers: flow(function* () {
      try {
        const users =
      } catch (e) {}
    }),
  }));

export const store = RootModel.create({
  users: [],
});

export const Store = createContext(null);

onSnapshot(store, () => console.log(store));

export function useStore() {
  const store = useContext(Store);

  if (store === null) {
    throw new Error("Store can`t be null");
  }

  return store;
}
