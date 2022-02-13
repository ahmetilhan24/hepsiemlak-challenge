import { apiHTTP } from "@/HTTP/api.http.js";

const routes = {
    order: "order/"
};
//product service
class OrderService {
  placeOrder(products){
    return apiHTTP.post(routes.order, products);
  }
}
export default new OrderService();
