import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza-dto';
import { Pizza } from './pizza.schema';

@Controller('pizzas')
export class PizzasController {
  constructor(private pizzasService: PizzasService) {}

  @Get()
  async getAll(): Promise<Pizza[]> {
    return await this.pizzasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pizza> {
    return this.pizzasService.findOne(id);
  }

  @Post()
  async create(@Body() newPizzaDto: CreatePizzaDto): Promise<Pizza> {
    return this.pizzasService.create(newPizzaDto);
  }

  @Get('seed')
  async seed() {
    return this.pizzasService.seed();
  }

  @Get('flush')
  async flush() {
    return this.pizzasService.flush();
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<Pizza> {
    return this.pizzasService.deleteOne(id);
  }

  @Put(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() pizza: Pizza
  ): Promise<Pizza> {
    return this.pizzasService.updateOne(id, pizza);
  }
}
