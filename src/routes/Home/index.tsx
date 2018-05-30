import Home from "./Home";
// import HomePageA from "./HomePageA";
// import HomePageB from "./HomePageB";

export default (store: any) => ({
  path: "/home",
  component: Home(store),
  // routes: [
  //   {
  //     path: "/home/page-a",
  //     component: HomePageA(),
  //   },
  //   {
  //     path: "/home/page-b",
  //     component: HomePageB(),
  //   }
  // ]
});
