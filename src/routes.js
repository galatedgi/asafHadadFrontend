import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";


const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage")
  },
  {
    path: "/register",
    name: "register",
    component: ()=> import("./pages/RegisterPage")
  },
  {
    path: "/error",
    name: "error",
    component: ErrorPage
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
];

export default routes;
