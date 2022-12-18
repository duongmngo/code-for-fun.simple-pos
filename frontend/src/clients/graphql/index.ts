import getProducts from "./products.query"
import { calcualteTotalPrice, checkout } from "./orders.query"

const graphQLClient = {
  getProducts,
  calcualteTotalPrice,
  checkout
}
export default graphQLClient;
