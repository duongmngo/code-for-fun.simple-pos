import { Logger } from "@nestjs/common";
import { Product } from "src/products/products.entity";
import { Order } from "./orders.entity";

export interface ICheckoutHelper {
  add(item: Product, qty?: number);
  total();
}

class CheckoutHelper implements ICheckoutHelper {

  pricingRules
  items: Partial<Product>[]
  constructor(pricingRules?: any) {
    this.pricingRules = pricingRules;
    this.items = [];
  }

  add(item: Partial<Product>, qty?: number) {
    if (typeof qty === 'undefined') this.items.push(item);
    for (let i = 0; i < qty; i++) {
      this.items.push(item);
    }
  }

  total() {
    let total = 0;
    this.items.forEach(it => {
      total += it.retailPrice
    })
    return Math.round(total * 100) / 100;
  }
}

export default CheckoutHelper