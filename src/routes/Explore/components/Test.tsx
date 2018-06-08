import * as React from "react";

export default class Test extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h1>Test Page</h1>
        <p>Test page content.</p>
        props.value: <input value={this.props.value} onChange={e => this.props.changeValue(e.target.value)} />
      </div>
    );
  }
}
