import axios from "axios";

export const userApi = axios.create({
  url: "https://randomuser.me/api/1.3",
  method: "get",
});
