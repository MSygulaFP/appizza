import { Pizza, PizzaIngredient, PizzaPrices } from '@appizza/interfaces';

export class CreatePizzaDto implements Omit<Pizza, '_id'> {
  name: string;
  ingredients: PizzaIngredient[];
  prices: PizzaPrices[];
}
