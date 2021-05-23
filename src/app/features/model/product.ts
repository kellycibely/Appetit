import { productOption } from './productOption';

export interface product {
  id: number;
  name: string;
  avatar: string;
  options: Array<productOption>;
  value: number;
}
