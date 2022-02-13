import { createStore } from "vuex";
import products from "@/store/modules/products.js";
import cart from "@/store/modules/cart.js";
export default createStore({
  modules: {
    products,
    cart
  },
});
