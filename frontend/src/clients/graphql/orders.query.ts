import { gql } from "@apollo/client";
import client from "../../apollo-client";

const QUERY_CALCUATE_TOTAL_PRICE = gql`
  query ($orderInput: OrderInput){
    calculateTotalPrice(orderInput: $orderInput)
  }
`;

const MUTATION_CHECKOUT = gql`
  mutation ($orderInput: OrderInput){
    checkout(orderInput: $orderInput) {
      id 
      totalPrice 	
    }
  }
`;

function convertToOrderInput(order: any) {
  return { items: order?.items.map((it: any) => ({ productId: it.product.id, qty: it.qty })), promotionCode: order.promotionCode }
}
export async function calcualteTotalPrice(order: any): Promise<number> {
  const { data: { calculateTotalPrice } } = await client.query({
    query: QUERY_CALCUATE_TOTAL_PRICE,
    variables: {
      orderInput: convertToOrderInput(order),
    }
  })
  return calculateTotalPrice;
}

export async function checkout(order: any): Promise<any> {
  return await client.mutate({
    mutation: MUTATION_CHECKOUT,
    variables: {
      orderInput: convertToOrderInput(order)
    }
  })
}
