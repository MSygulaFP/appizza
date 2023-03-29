import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzasModule } from './modules/pizzas/pizzas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/appizza'),
    PizzasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
