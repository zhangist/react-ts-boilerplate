import { Map, fromJS } from "immutable";

export type ProfileType = {
  name: string;
  age: number;
  hobbies: string[];
}
export type Profile = Map<keyof ProfileType, any>;

const profile: Profile = fromJS({
  name: "zard",
  age: 20,
  hobbies: ["Basketball", "Football"],
});
export default profile;
