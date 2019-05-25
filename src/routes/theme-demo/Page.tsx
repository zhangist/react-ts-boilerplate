import * as React from "react";

enum ThemeTypes {
  white = "white",
  black = "black",
}

export interface PageProps {}
export interface PageState {}

class Page extends React.Component<PageProps, PageState> {
  public render() {
    return (
      <div>
        <div style={{ padding: "10px" }}>Default</div>
        <div style={{ padding: "10px" }}>
          <a
            href="javascript:void(0);"
            onClick={() => this.changeTheme(ThemeTypes.white)}
          >
            white
          </a>
          <span> / </span>
          <a
            href="javascript:void(0);"
            onClick={() => this.changeTheme(ThemeTypes.black)}
          >
            black
          </a>
        </div>
      </div>
    );
  }

  private changeTheme = (theme: ThemeTypes) => {
    localStorage.setItem("theme", theme);
    location.reload();
  };
}

export default Page;
