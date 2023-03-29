import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pizza, PizzaSchema } from './pizza.schema';
import { PizzasController } from './pizzas.controller';
import { PizzasService } from './pizzas.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pizza.name,
        schema: PizzaSchema,
      },
    ]),
  ],
  controllers: [PizzasController],
  providers: [PizzasService],
})
export class PizzasModule {}
