class CartService {
  setProducts(products) {
    localStorage.setItem("cart", JSON.stringify(products));
  }
  clearProducts(){
    localStorage.removeItem("cart");
  }
}

export default new CartService();
