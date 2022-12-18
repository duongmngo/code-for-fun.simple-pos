
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class OrderInput {
    items?: Nullable<Nullable<OrderItem>[]>;
    promotionCode?: Nullable<string>;
    customerId?: Nullable<string>;
}

export class OrderItem {
    productId?: Nullable<string>;
    qty?: Nullable<number>;
}

export abstract class IQuery {
    abstract findCustomers(search?: Nullable<string>): Nullable<Nullable<Customer>[]> | Promise<Nullable<Nullable<Customer>[]>>;

    abstract calculateTotalPrice(orderInput?: Nullable<OrderInput>): Nullable<number> | Promise<Nullable<number>>;

    abstract products(firstIdx?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;
}

export class Customer {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export abstract class IMutation {
    abstract checkout(orderInput?: Nullable<OrderInput>): Nullable<Order> | Promise<Nullable<Order>>;
}

export class Order {
    id?: Nullable<string>;
    totalPrice?: Nullable<number>;
}

export class Product {
    id?: Nullable<string>;
    sku?: Nullable<string>;
    name?: Nullable<string>;
    retailPrice?: Nullable<number>;
    description?: Nullable<string>;
    createdDate?: Nullable<Date>;
    updatedDate?: Nullable<Date>;
}

type Nullable<T> = T | null;
