// src/features/orders/types/Order.interface.ts

import { OrderStates } from "../enums/OrderStates.enum";

export interface OrderI {
  id: string;
  title: string;
  amount: number;
  status: OrderStates; // Utilisation de notre enum
  customerId: string;
}
