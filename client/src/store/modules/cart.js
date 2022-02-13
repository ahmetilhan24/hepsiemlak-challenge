import cartService from "@/services/cart.service";
import orderService from "@/services/order.service";

const state = {
  cart: [],
  cartTotal: 0,
};
const getters = {
  getCart(state) {
    return state.cart;
  },
  getCartTotal(state) {
    return state.cartTotal;
  },
};
const mutations = {
  setCart(state, products) {
    state.cart = products;
  },
  async pushProduct(state, product) {
    //set keyy for amount
    await state.cart.push({
      ...product,
      amount: 1,
    });
    //update cart localstorage
    cartService.setProducts(state.cart);
    this.commit("setCartTotal");
  },
  async removeProduct(state, productId) {
    //find product index with es6 basic
    let itemIndex = await state.cart.findIndex((item) => item.id === productId);
    //removed array
    await state.cart.splice(itemIndex, 1);
    //update cart localstorage
    cartService.setProducts(state.cart);
    this.commit("setCartTotal");
  },
  //update product for amount
  async updateProduct(state, data) {
    //find product index with es6 basic
    let isProduct = await state.cart.find(
      (item) => item.id === data.product.id
    );
    isProduct.amount = data.amount;
    //update cart localstorage
    cartService.setProducts(state.cart);
    this.commit("setCartTotal");
  },
  setCartTotal(state) {
    //clear totalCart
    state.cartTotal = 0;
    //sum price * amount
    state.cart?.forEach((item) => {
      state.cartTotal += Number(item.price * item.amount);
    });
  },
};
const actions = {
  placeOrder({ state, commit }) {
    return orderService.placeOrder(state.cart).then((res) => {
      //clear cart
      commit("setCart", []);
      cartService.clearProducts();
      return res;
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
