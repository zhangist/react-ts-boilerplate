import * as React from "react";
import styles from "./styles.less";

export default class Page extends React.Component {
  public render() {
    return (
      <div>
        <div style={{ padding: "10px" }}>Default</div>
        <div style={{ padding: "10px" }}>
          <pre className={styles.code}>{`
|-- src
  |-+ @types
  |-+ components
  |-+ containers
  |-+ enum
  |-+ interfaces
  |-+ routes
  |-+ services
  |-+ store
  |-+ utils
  |-- favicon.ico
  |-- global.less
  |-- index.html
  |-- Loader.tsx
  |-- Page.tsx
  |-- Root.tsx
          `}</pre>
        </div>
        <div style={{ padding: "10px" }}>
          <div>Features:</div>
          <ul>
            <li>data store</li>
            <li>i18n support</li>
            <li>multiple themes </li>
          </ul>
        </div>
        <div style={{ padding: "10px" }}>
          <div>Lib:</div>
          <ul>
            <li>redux</li>
            <li>axios</li>
            <li>i18next</li>
            <li>less/css-modules</li>
          </ul>
        </div>
      </div>
    );
  }
}
