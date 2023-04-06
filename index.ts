import { randomUUID } from "crypto";

interface IProduct {
     id: string;
     name: string;
     price: number;
     quantity: number;
}

class Order {
     userId: string;
     orderId: string
     time: Date;
     products: IProduct[]
     constructor(userId: string) {
          this.orderId = randomUUID();
          this.userId = userId;
          this.time = new Date()
          this.products = []
     }
}

class OrderManager {
     order: Order | null
     constructor() {
          this.order = null
     }

     //create a new order
     createOrder(orderId: string) {
          this.order = new Order(orderId)
          return this.order
     }

     //add products to order
     addProduct(product: IProduct) {
          if (this.order) this.order.products.push(product)
     }

     //get order
     getOrder() {
          return this.order
     }
}

const orderManager = new OrderManager()
orderManager.createOrder("userId-00001")
orderManager.addProduct({ id: "product-0001", name: "Product 001", price: 14000, quantity: 1 })
orderManager.addProduct({ id: "product-0002", name: "Product 002", price: 3000, quantity: 2 })
