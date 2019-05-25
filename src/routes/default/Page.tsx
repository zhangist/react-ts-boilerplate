import * as React from "react";
import styles from "./styles.less";

export default class Page extends React.Component {
  public render() {
    return (
      <div>
        <div style={{ padding: "10px 8px" }}>Default</div>
        <div style={{ padding: "10px 8px" }}>
          <pre className={styles.code}>{`
|-- src
  |-+ @types
  |-+ components
  |-+ containers
  |-+ enum
  |-+ interfaces
  |-+ routes
  |-+ services
  |-+ utils
  |-+ store
  |-- favicon.ico
  |-- global.less
  |-- index.html
  |-- Loader.tsx
  |-- Page.tsx
  |-- Root.tsx
          `}</pre>
        </div>
        <div style={{ padding: "10px 8px" }}>
          <ul>
            <li>data store</li>
            <li>i18n support</li>
            <li>multiple themes </li>
          </ul>
        </div>
        <div style={{ padding: "10px 8px" }}>
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
