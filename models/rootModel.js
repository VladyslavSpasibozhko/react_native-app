import { createContext, useContext } from "react";
import { types, onSnapshot, flow } from "mobx-state-tree";
import { UserModel } from "./user/userModel";
import { userApi } from "../helpers/axios/axios";

const RootModel = types
  .model("RootModel", {
    users: types.optional(types.array(UserModel), []),
    viewType: types.union(types.literal("list"), types.literal("gallery")),
  })
  .actions((self) => ({
    getUsers: flow(function* () {
      try {
        const { data } = yield userApi.get("/?results=200");
        self.users = data.results;
      } catch (e) {
        console.log(e);
      }
    }),
    setViewType: function (type) {
      self.viewType = type;
    },
  }))
  .views((self) => ({
    getView: function () {
      return self.viewType;
    },
  }));

export const appStore = RootModel.create({
  users: [],
  viewType: "list",
});

export const Store = createContext(null);

onSnapshot(appStore, () => console.log(appStore));

export function useStore() {
  const store = useContext(Store);

  if (store === null) {
    throw new Error("Store can`t be null");
  }

  return store;
}
