import cartService from "@/services/cart.service";

const state = {
  cart: []
};
const getters = {
  getCart(state){
    return state.cart
  }
};
const mutations = {
  setCart(state, products){
    state.cart = products
  },
  async pushProduct(state, product){
    await state.cart.push(product);
    cartService.setProducts(state.cart);
  },
  async removeProduct(state, productId){
    let itemIndex = await state.cart.findIndex(item => item.id === productId)
    state.cart.splice(itemIndex, 1);
  }
};
const actions = {};

export default{
  state,
  getters,
  mutations,
  actions
}