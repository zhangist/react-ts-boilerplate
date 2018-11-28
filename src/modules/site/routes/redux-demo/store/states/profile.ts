import { Map, fromJS } from "immutable";

export interface Profile {
  name: string;
  age: number;
  hobbies: string[];
}
export const profile: Profile = {
  name: "zard",
  age: 20,
  hobbies: ["Basketball", "Football"],
};

export type $$Profile = Map<keyof Profile, any>;
export const $$profile: $$Profile = fromJS(profile);
