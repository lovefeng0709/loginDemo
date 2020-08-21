
import Login from "./components/login.js"
import SignUp from "./components/signUp/signUp.js"
import notFind from "./components/404.js"
const routes = [
  {
    path: "/",
    exact: true,
    component: Login
  },
  {
    path: "/signIn",
    exact: true,
    component: SignUp
  },
  {
    component: notFind
  }

];
export default routes;