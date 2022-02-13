import { apiHTTP } from "@/HTTP/api.http.js";

const routes = {
    listing: "listing/"
};
//product service
class ProductService {
  allProducts(){
    return apiHTTP.get(routes.listing);
  }
}
export default new ProductService();
