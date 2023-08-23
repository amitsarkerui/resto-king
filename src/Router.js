import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/Login.vue";
import AddRestaurant from "./components/AddRestaurant.vue";
import UpdateRestaurant from "./components/UpdateRestaurant.vue";

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LogIn",
    component: LogIn,
    path: "/login",
  },
  {
    name: "UpdateRestaurant",
    component: UpdateRestaurant,
    path: "/Update-Restaurant",
  },
  {
    name: "AddRestaurant",
    component: AddRestaurant,
    path: "/Add-Restaurant",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
