import { SimpleOrder } from "./simpleOrder";

export interface Client {
  id: number;
  name: string;
  avatar: string;
  simpleOrders: Array<SimpleOrder>;
}
