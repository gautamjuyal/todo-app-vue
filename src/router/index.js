import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddTodoView from "@/views/AddTodoView.vue";
import TodoShow from "@/views/TodoShow.vue";
import SearchView from "@/views/SearchView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "add-todo",
    component: AddTodoView,
    props: true,
  },
  {
    path: "/todo/:id",
    name: "todo-show",
    component: TodoShow,
    props: true,
  },
  {
    path: "/search",
    name: "search-view",
    component: SearchView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
