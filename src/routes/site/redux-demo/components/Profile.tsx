import * as React from "react";
import { IProfile, Profile } from "../store/states/profile";

export interface Props {
  profile: Profile;
}

export default (props: Props) => {
  return (
    <ul>
      <li>name: {props.profile.get("name")}</li>
      <li>age: {props.profile.get("age")}</li>
      <li>
        hobbies:
        {(props.profile.get("hobbies") as IProfile["hobbies"]).map((hobby, index) => {
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
