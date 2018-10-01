import { List } from "immutable";

export type Friends = List<string>;

const friends: Friends = List(["Lily", "Jack"]);

export default friends;
