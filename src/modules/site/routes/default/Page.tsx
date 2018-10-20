import * as React from "react";
import * as App from "../../../../components/app";

const codeStyle: React.CSSProperties = {
  background: "#eee",
  borderRadius: "4px",
  overflow: "auto",
};

const srcDir = `
  -- src
    |--+common                     // 公共文件夹
    |--+components                 // 组件文件夹
    |--+containers                 // 容器文件夹
    |-- i18n                       // i18n 国际化资源文件夹
    |  |-- app                     //   app 文件夹
    |  |  |-- en.json              //     en
    |  |  |-- zh-cn.json           //     zh-cn
    |-- modules                    // modules 文件夹
    |  |--+site                    //   site 模块
    |  |--+user                    //   user 模块
    |-- store                      // store 文件夹
    |  |-- actions.ts              //   actions
    |  |-- actionTypes.ts          //   action types
    |  |-- reducer.ts              //   reducer
    |-- AppLoader.tsx              // App Loader 异步加载器
    |-- favicon.ico                // icon
    |-- index.html                 // html
    |-- index.tsx                  // entry

`;

const moduleDir = `
  -- moduleName
    |--+[common]                   // [公共文件夹]
    |--+[components]               // [公共组件文件夹]
    |--+[containers]               // [公共容器文件夹]
    |--+[routes]                   // [routes 文件夹]
    |--+[store]                    // [公共 store 文件夹]

`;

const routesSiteDir = `
  -- routes
    |-- default                    // default 文件夹 (子模块)
    |  |-- [components]            //   [组件文件夹]
    |  |-- [containers]            //   [容器文件夹]
    |  |-- [store]                 //   [store 文件夹]
    |  |-- Page.tsx                //   页面文件
    |--+i18n-demo                  // i18n 示例文件夹 (子模块)
    |-- pages-demo                 // pages 示例文件夹 (子模块)
    |  |-- Page.tsx                //   页面文件
    |  |-- PageA.tsx               //   页面子模块 PageA
    |  |-- PageBVeryBig.tsx        //   页面子模块 PageBVeryBig
    |--+redux-demo                 // redux 示例文件夹 (子模块)
    |--+url-params-demo            // urlParams 示例文件夹
    |-- DefaultLoader.tsx          // default 示例 loader
    |-- I18nDemoLoader.tsx         // i18n 示例 loader
    |-- PageBVeryBigLoader.tsx     // pageBVeryBig 示例 loader
    |-- PagesDemoLoader.tsx        // pages 示例 loader
    |-- README.md                  // readme 文件
    |-- ReduxDemoLoader.tsx        // redux 示例 loader
    |-- routes.ts                  // routes
    |-- UrlParamsDemoLoader.tsx    // urlParams 示例 loader

`;

export default class Page extends React.Component {
  public render() {
    return (
      <div>
        <App.Header />
        <App.Content>
          <App.PageTitle>Default Page</App.PageTitle>
          <div>
            <h3>开发指南:</h3>
            <h4>目录结构:</h4>
            <div>src 目录结构:</div>
            <pre style={codeStyle}>{srcDir}</pre>
            <div>module 目录结构:</div>
            <pre style={codeStyle}>{moduleDir}</pre>
            <div>routes 下 site 模块目录结构:</div>
            <pre style={codeStyle}>{routesSiteDir}</pre>
            <h4>技术架构:</h4>
            <ul>
              <li>react/redux/immutable</li>
              <li>i18n/i18next</li>
              <li>styled-components</li>
              <li>typescript</li>
              <li>webpack/babel/tslint/prettier</li>
            </ul>
          </div>
        </App.Content>
      </div>
    );
  }
}
