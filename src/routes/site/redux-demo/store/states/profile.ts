import { Map, fromJS } from "immutable";

export interface IProfile {
  name: string;
  age: number;
  hobbies: string[];
}
export type Profile = Map<keyof IProfile, any>;

const profile: Profile = fromJS({
  name: "zard",
  age: 20,
  hobbies: ["Basketball", "Football"],
});
export default profile;
