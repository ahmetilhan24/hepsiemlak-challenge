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
     //update cart localstorage
    cartService.setProducts(state.cart);
  },
  async removeProduct(state, productId){
    //find product index with es6 basic
    let itemIndex = await state.cart.findIndex(item => item.id === productId)
    //removed array
    await state.cart.splice(itemIndex, 1);
    //update cart localstorage
    cartService.setProducts(state.cart);
  }
};
const actions = {};

export default{
  state,
  getters,
  mutations,
  actions
}