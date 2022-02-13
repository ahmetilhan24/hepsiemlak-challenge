import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Dist",
    redirect: {name: "Products"}
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("@/views/Products.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/Cart.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
