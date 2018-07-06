import * as React from "react";
import * as Styled from "../../../components/Styled";

export default class Default extends React.Component {
  public render() {
    return (
      <Styled.Content>
        <Styled.PageTitle>Default Page</Styled.PageTitle>
        <p>Default page content.</p>
      </Styled.Content>
    );
  }
}
