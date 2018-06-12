import * as React from "react";
import * as Styled from "../../../components/Styled";

export default class About extends React.Component {
  public render() {
    return (
      <Styled.Content>
        <Styled.PageTitle>About Page</Styled.PageTitle>
        <p>About page content.</p>
      </Styled.Content>
    );
  }
}
