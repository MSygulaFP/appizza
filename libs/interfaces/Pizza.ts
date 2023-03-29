export type PizzaIngredient =
  | 'cheese'
  | 'salami'
  | 'pineapple'
  | 'onion'
  | 'seafood';

export const PIZZA_INGREDIENTS: PizzaIngredient[] = [
  'cheese',
  'salami',
  'pineapple',
  'onion',
  'seafood',
];

export const PIZZA_SIZES: PizzaSize[] = ['30cm', '40cm', '50cm'];

export type PizzaSize = '30cm' | '40cm' | '50cm';

export interface PizzaPrices {
  size: PizzaSize;
  price: number;
}

export interface Pizza {
  _id: string;
  name: string;
  ingredients: PizzaIngredient[];
  prices: PizzaPrices[];
}
