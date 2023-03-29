import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pizza, PizzaDocument } from './pizza.schema';
import { Model } from 'mongoose';
import { CreatePizzaDto } from './dto/create-pizza-dto';

@Injectable()
export class PizzasService {
  constructor(
    @InjectModel(Pizza.name) private pizzaModel: Model<PizzaDocument>
  ) {}

  async findAll(): Promise<Pizza[]> {
    return this.pizzaModel.find().exec();
  }

  async findOne(id: string): Promise<Pizza> {
    return this.pizzaModel.findById(id).exec();
  }

  async updateOne(id: string, pizza: Pizza): Promise<Pizza> {
    return this.pizzaModel.findByIdAndUpdate(id, pizza).exec();
  }

  async deleteOne(id: string): Promise<Pizza> {
    return this.pizzaModel.findByIdAndDelete(id).exec();
  }

  async create(newPizzaDto: CreatePizzaDto): Promise<Pizza> {
    const newPizza = this.pizzaModel.create(newPizzaDto);

    return await newPizza;
  }

  async flush() {
    await this.pizzaModel.deleteMany({});
  }

  async seed() {
    const results = await this.pizzaModel.find().exec();

    if (results.length > 0) {
      return results;
    }

    const seed = [
      {
        name: 'Margherita',
        ingredients: ['cheese'],
        prices: [
          {
            size: '30cm',
            price: 30,
          },
          {
            size: '40cm',
            price: 35,
          },
          {
            size: '50cm',
            price: 40,
          },
        ],
      },
      {
        name: 'Salami',
        ingredients: ['cheese', 'salami'],
        prices: [
          {
            size: '30cm',
            price: 30,
          },
          {
            size: '40cm',
            price: 35,
          },
          {
            size: '50cm',
            price: 40,
          },
        ],
      },
      {
        name: 'Hawaiian pizza',
        ingredients: ['cheese', 'pineapple'],
        prices: [
          {
            size: '30cm',
            price: 30,
          },
          {
            size: '40cm',
            price: 35,
          },
          {
            size: '50cm',
            price: 40,
          },
        ],
      },
      {
        name: 'Seafood',
        ingredients: ['cheese', 'seafood'],
        prices: [
          {
            size: '30cm',
            price: 30,
          },
          {
            size: '40cm',
            price: 35,
          },
          {
            size: '50cm',
            price: 40,
          },
        ],
      },
      {
        name: 'Premium',
        ingredients: ['cheese', 'salami', 'seafood', 'pineapple', 'onion'],
        prices: [
          {
            size: '30cm',
            price: 30,
          },
          {
            size: '40cm',
            price: 35,
          },
          {
            size: '50cm',
            price: 40,
          },
        ],
      },
      {
        name: 'Triplecheese',
        ingredients: ['cheese', 'cheese', 'cheese'],
        prices: [
          {
            size: '30cm',
            price: 30,
          },
          {
            size: '40cm',
            price: 35,
          },
          {
            size: '50cm',
            price: 40,
          },
        ],
      },
      {
        name: 'Cheese attack',
        ingredients: [
          'cheese',
          'cheese',
          'cheese',
          'cheese',
          'cheese',
          'cheese',
        ],
        prices: [
          {
            size: '30cm',
            price: 30,
          },
          {
            size: '40cm',
            price: 35,
          },
          {
            size: '50cm',
            price: 40,
          },
        ],
      },
      {
        name: 'Triple salami cheese',
        ingredients: [
          'cheese',
          'cheese',
          'cheese',
          'salami',
          'salami',
          'salami',
        ],
        prices: [
          {
            size: '30cm',
            price: 30,
          },
          {
            size: '40cm',
            price: 35,
          },
          {
            size: '50cm',
            price: 40,
          },
        ],
      },
    ];

    return await this.pizzaModel.insertMany(seed);
  }
}
