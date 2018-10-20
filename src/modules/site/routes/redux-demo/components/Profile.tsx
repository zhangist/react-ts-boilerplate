import * as React from "react";
import { Profile, $$Profile } from "../store/states/profile";

export type Props = {
  $$profile: $$Profile;
};

export default (props: Props) => {
  return (
    <ul>
      <li>name: {props.$$profile.get("name")}</li>
      <li>age: {props.$$profile.get("age")}</li>
      <li>
        hobbies:
        {(props.$$profile.get("hobbies") as Profile["hobbies"]).map((hobby, index) => {
          return (
            <span key={index}>
              &nbsp;
              {hobby}
            </span>
          );
        })}
      </li>
    </ul>
  );
};
