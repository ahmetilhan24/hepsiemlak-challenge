import productService from "@/services/product.service.js";
const state = {
  products: [],
};
const getters = {
  getProducts(state) {
    return state.products;
  },
};
const mutations = {
  setProducts(state, data) {
    state.products = data;
  },
};
const actions = {
  async allProducts({commit}) {
    return productService.allProducts().then((res) => {
      commit("setProducts", res.data)
      //return for consume
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
