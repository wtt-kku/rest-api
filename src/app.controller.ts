import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { AppService } from "./app.service";

import { VerifyExpenseDto } from "./dto/verify-expense.dto";
import { VerifyDto } from "./dto/verify.dto";
import { CreateProductDTO } from "./dto/create-income.dto";
import { CreateComputerDTO } from "./dto/create-com.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get("/products")
  getProducts() {
    return this.appService.getProducts();
  }

  @Get("/product/:id")
  getProduct(@Param("id") id: string) {
    return this.appService.getProduct(id);
  }

  @Post("/product")
  createProduct(@Body() createProductDTOaddProductDTO: CreateProductDTO) {
    return this.appService.createProduct(createProductDTOaddProductDTO);
  }

  @Put("/product/:id")
  updateProduct(@Param("id") id, @Body() createProductDTO: CreateProductDTO) {
    return this.appService.updateProduct(id, createProductDTO);
  }

  @Delete("/product/:id")
  deleteProduct(@Param("id") id: string) {
    return this.appService.removeProduct(id);
  }

  @Get("/computers")
  getComputers() {
    return this.appService.getComputers();
  }

  @Get("/computer/:id")
  getComputer(@Param("id") id: string) {
    return this.appService.getComputer(id);
  }

  @Post("/computer")
  createCom(@Body() createComputerDTO: CreateComputerDTO) {
    return this.appService.createComputer(createComputerDTO);
  }

  @Put("/computer/:id")
  updateComputer(
    @Param("id") id,
    @Body() createComputerDTO: CreateComputerDTO
  ) {
    return this.appService.updateComputer(id, createComputerDTO);
  }

  @Delete("/computer/:id")
  deletecomputer(@Param("id") id: string) {
    return this.appService.removeComputer(id);
  }

  @Get("/computer-search")
  searchComputer(@Query("word") word: string) {
    return this.appService.searchComputer(word);
  }
}
