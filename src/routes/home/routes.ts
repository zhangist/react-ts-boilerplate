import Home from "./Home";

export default (store: any) => ([{
  path: "/",
  component: Home(store),
},{
  path: "/home",
  component: Home(store),
},{
  path: "/home/:id",
  component: Home(store),
}]);
