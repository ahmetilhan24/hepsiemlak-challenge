class CartService {
  setProducts(products) {
    localStorage.setItem("cart", JSON.stringify(products));
  }
}

export default new CartService();
