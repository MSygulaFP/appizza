import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PizzaPrices } from '@appizza/interfaces';

export type PizzaDocument = HydratedDocument<Pizza>;

@Schema()
export class Pizza {
  @Prop() name: string;

  @Prop([String]) ingredients: string[];

  @Prop([Object]) prices: PizzaPrices[];
}

export const PizzaSchema = SchemaFactory.createForClass(Pizza);
