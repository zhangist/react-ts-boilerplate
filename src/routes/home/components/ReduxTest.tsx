import * as React from "react";

export interface ReduxTestProps {
  counter: number;
  location: string;
  add: () => void;
  locationChange: () => void;
}

export default ({ counter, location, add, locationChange }: ReduxTestProps) => (
  <div>
    <h3>redux test: </h3>
    <span>counter: {counter}</span>
    <button onClick={() => add()}>add counter</button>
    <br />
    <span>location: {location}</span>
    <button onClick={() => locationChange()}>change location</button>
  </div>
);
