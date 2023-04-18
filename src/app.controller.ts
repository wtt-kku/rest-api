import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

import { VerifyExpenseDto } from './dto/verify-expense.dto';
import { VerifyDto } from './dto/verify.dto';
import { CreateProductDTO } from './dto/create-income.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('/products')
  getProducts() {
    return this.appService.getProducts();
  }

  @Get('/product/:id')
  getProduct(@Param('id') id: string) {
    return this.appService.getProduct(id);
  }

  @Post('/product')
  createProduct(@Body() createProductDTOaddProductDTO: CreateProductDTO) {
    return this.appService.createProduct(createProductDTOaddProductDTO);
  }

  @Put('/product/:id')
  updateProduct(@Param('id') id, @Body() createProductDTO: CreateProductDTO) {
    return this.appService.updateProduct(id, createProductDTO);
  }

  @Delete('/product/:id')
  deleteProduct(@Param('id') id: string) {
    return this.appService.removeProduct(id);
  }
}
