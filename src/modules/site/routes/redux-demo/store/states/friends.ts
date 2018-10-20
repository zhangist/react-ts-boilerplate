import { List } from "immutable";

export type Friends = string[];
export const friends: Friends = ["Lily", "Jack"];

export type $$Friends = List<string>;
export const $$friends: $$Friends = List(friends);
