import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Dist",
    redirect: {name: "Products"},
  },
  {
    path: "/products",
    name: "Products",
    meta: {
      title: "Products"
    },
    component: () => import("@/views/Products.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    meta: {
      title: "Cart"
    },
    component: () => import("@/views/Cart.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.afterEach((to) => {
  const DEFAULT_TITLE = "Hepsi emlak challenge";
  document.title = `${to.meta.title} - ${DEFAULT_TITLE}` || DEFAULT_TITLE;
});
export default router;
