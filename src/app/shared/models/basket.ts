import { BasketItem } from './basketItem';

export interface Basket {
  count: number;
  total: number;
  basketItems: BasketItem[];
}
