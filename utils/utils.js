import { NATIONALITIES } from "../constants/nationalities";

export const getNationality = (code) =>
  NATIONALITIES.find(({ iconCode }) => iconCode === code);

export const getUserName = ({ first, last, title }) => {
  return `${title}. ${first} ${last}`;
};
