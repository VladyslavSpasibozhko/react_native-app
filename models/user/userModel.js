import { types } from "mobx-state-tree";

const NamesModel = types.model("Names", {
  title: types.string,
  first: types.string,
  last: types.string,
});

const LocationModel = types.model("Location", {
  street: types.model("Street", {
    number: types.number,
    name: types.string,
  }),
  city: types.string,
  state: types.string,
  country: types.string,
  postcode: types.number,
  coordinates: types.model("Coordinate", {
    latitude: types.string,
    longitude: types.string,
  }),
  timezone: types.model("Timezone", {
    offset: types.string,
    description: types.string,
  }),
});

const Login = types.model("Login", {
  uuid: types.string,
  username: types.string,
  password: types.string,
  salt: types.string,
  md5: types.string,
  sha1: types.string,
  sha256: types.string,
});

export const UserModel = types.model("UserModel", {
  gender: "male",
  name: NamesModel,
  location: LocationModel,
  email: types.string,
  login: Login,
  dob: types.model("Dob", {
    date: types.string,
    age: types.number,
  }),
  registered: types.model("Registered", {
    date: types.string,
    age: types.number,
  }),
  phone: types.string,
  cell: types.string,
  id: types.model("ID", {
    name: types.string,
    value: types.string,
  }),
  picture: types.model("Picture", {
    large: types.string,
    medium: types.string,
    thumbnail: types.string,
  }),
  nat: types.string,
});
