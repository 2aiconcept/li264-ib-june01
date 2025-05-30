// src/features/orders/models/Order.model.ts

import { OrderStates } from "../enums/OrderStates.enum";
import type { OrderI } from "../types/Order.interface"; // Adaptez le chemin si nécessaire

export class Order implements OrderI {
  id = "";
  title = "";
  amount = 0;
  status = OrderStates.PENDING;
  customerId = "";

  constructor(obj: Partial<OrderI>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
