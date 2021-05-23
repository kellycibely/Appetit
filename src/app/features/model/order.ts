import { Client } from './client';

export interface Order {
  id: number;
  clients: Array<Client>;
  total: number;
  data: Date;
  product: any;
  quantity: number;
}
