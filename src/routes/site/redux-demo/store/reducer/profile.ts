import { Map, List, fromJS } from "immutable";

export interface IProfile {
  name: string;
  age: number;
  hobbies: List<string>;
}

export type Profile = Map<keyof IProfile, any>;

const profile: Profile = fromJS({
  name: "zard",
  age: 20,
  hobbies: List(["Basketball", "Football"]),
});

export default profile;
