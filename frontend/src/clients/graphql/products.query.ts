import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { Product } from "../../state/app-context";

const QUERY = gql`
  query ($firstIdx: Int, $offset: Int) {
    products(firstIdx: $firstIdx,offset:$offset) {
      id
      name
      sku
      retailPrice
      description
      createdDate
      updatedDate
    }
  }
`;

export default async function getProducts(firstIdx: number, offset: number = 20): Promise<Product[]> {  
  const { data } = await client.query({ query: QUERY, variables: { firstIdx, offset } })  
  return data?.products || [];
}
