import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";

import { configService, Key } from "./environment/config.service";
import { IResponses } from "./interface";

import * as moment from "moment";

import removeVat from "./lib/remove-vat";

import { ProductEntity } from "./entity/products.entity";
import { CreateProductDTO } from "./dto/create-income.dto";
import { ComputerEntity } from "./entity/computer.entity";
import { CreateComputerDTO } from "./dto/create-com.dto";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ProductEntity)
    private productEntity: Repository<ProductEntity>,
    @InjectRepository(ComputerEntity)
    private computerEntity: Repository<ComputerEntity> // private computerEntity: Repository<ComputerEntity>
  ) {}
  getHello() {
    return {
      result: true,
      status: 200,
      message: "Application is running",
    };
  }

  // async getIncome(): Promise<IResponses> {
  //   try {
  //     let incomes = await this.incomeEntity.find({
  //       order: {
  //         create_date: 'DESC',
  //       },
  //     });

  //     return {
  //       result: true,
  //       status: 200,
  //       message: 'Load success',
  //       data: incomes,
  //     };
  //   } catch (error) {
  //     console.log(error);
  //     return {
  //       result: false,
  //       status: 500,
  //       message: 'Internal Error',
  //     };
  //   }
  // }

  async getProducts(): Promise<IResponses> {
    try {
      let products = await this.productEntity.createQueryBuilder("p").getMany();

      return {
        result: true,
        status: 200,
        message: "Get Products Success",
        data: products,
      };
    } catch (e) {
      return {
        result: false,
        status: 400,
        message: "Error",
      };
    }
  }

  async getProduct(id: string): Promise<IResponses> {
    try {
      let products = await this.productEntity
        .createQueryBuilder("p")
        .where("p.id = :id", { id: id })
        .getOne();

      return {
        result: true,
        status: 200,
        message: "Load success",
        data: products,
      };
    } catch (e) {
      return {
        result: false,
        status: 400,
        message: "Error",
      };
    }
  }

  async createProduct(
    createProductDTOaddProductDTO: CreateProductDTO
  ): Promise<IResponses> {
    try {
      let p = new ProductEntity();
      p.product_name = createProductDTOaddProductDTO.product_name;
      p.product_price = createProductDTOaddProductDTO.product_price;

      await this.productEntity.save(p);

      return {
        result: true,
        status: 201,
        message: "Created",
      };
    } catch (e) {
      console.log(e);
      return {
        result: false,
        status: 400,
        message: "Error",
      };
    }
  }

  async updateProduct(
    id: string,
    createProductDTOaddProductDTO: CreateProductDTO
  ): Promise<IResponses> {
    try {
      let p = new ProductEntity();
      p.product_name = createProductDTOaddProductDTO.product_name;
      p.product_price = createProductDTOaddProductDTO.product_price;

      await this.productEntity.update({ id: id }, p);

      return {
        result: true,
        status: 201,
        message: "Update success",
      };
    } catch (error) {
      console.log(error);
      return {
        result: false,
        status: 500,
        message: "Internal Error",
      };
    }
  }

  async removeProduct(id: string): Promise<IResponses> {
    try {
      await this.productEntity.delete({ id });

      return {
        result: true,
        status: 200,
        message: "Deleted",
      };
    } catch (e) {
      return {
        result: false,
        status: 400,
        message: "Error",
      };
    }
  }

  async getComputers(): Promise<IResponses> {
    try {
      let computers = await this.computerEntity
        .createQueryBuilder("p")
        .andWhere("p.isDel = :s", {
          s: false,
        })

        .getMany();

      return {
        result: true,
        status: 200,
        message: "Get Computers Success",
        data: computers,
      };
    } catch (e) {
      return {
        result: false,
        status: 400,
        message: "Error",
      };
    }
  }

  async getComputer(id: string): Promise<IResponses> {
    try {
      let computer = await this.computerEntity
        .createQueryBuilder("p")
        .where("p.id = :id", { id: id })
        .andWhere("p.isDel = :s", {
          s: false,
        })
        .getOne();

      if (!computer) {
        return {
          result: false,
          status: 404,
          message: "Not found",
        };
      }

      return {
        result: true,
        status: 200,
        message: "Load success",
        data: computer,
      };
    } catch (e) {
      return {
        result: false,
        status: 400,
        message: "Error",
      };
    }
  }

  async createComputer(
    createComputerDTO: CreateComputerDTO
  ): Promise<IResponses> {
    try {
      let p = new ComputerEntity();
      p.title = createComputerDTO.title;
      p.image = createComputerDTO.image;
      p.price = createComputerDTO.price;
      p.brand = createComputerDTO.brand;
      p.model = createComputerDTO.model;
      p.inStock = createComputerDTO.inStock;
      p.cpu = createComputerDTO.cpu;
      p.gpu = createComputerDTO.gpu;
      p.displayScreen = createComputerDTO.displayScreen;
      p.ram = createComputerDTO.ram;

      await this.computerEntity.save(p);

      return {
        result: true,
        status: 201,
        message: "Created",
      };
    } catch (e) {
      console.log(e);
      return {
        result: false,
        status: 400,
        message: "Error",
      };
    }
  }

  async updateComputer(
    id: string,
    createComputerDTO: CreateComputerDTO
  ): Promise<IResponses> {
    try {
      let p = new ComputerEntity();
      p.title = createComputerDTO.title;
      p.image = createComputerDTO.image;
      p.price = createComputerDTO.price;
      p.brand = createComputerDTO.brand;
      p.model = createComputerDTO.model;
      p.inStock = createComputerDTO.inStock;
      p.cpu = createComputerDTO.cpu;
      p.gpu = createComputerDTO.gpu;
      p.displayScreen = createComputerDTO.displayScreen;
      p.ram = createComputerDTO.ram;

      await this.computerEntity.update({ id: id }, p);

      return {
        result: true,
        status: 200,
        message: "Update success",
      };
    } catch (error) {
      console.log(error);
      return {
        result: false,
        status: 500,
        message: "Internal Error",
      };
    }
  }

  async removeComputer(id: string): Promise<IResponses> {
    try {
      let p = new ComputerEntity();
      p.isDel = true;
      await this.computerEntity.update({ id: id }, p);

      return {
        result: true,
        status: 200,
        message: "Delete success",
      };
    } catch (error) {
      console.log(error);
      return {
        result: false,
        status: 500,
        message: "Internal Error",
      };
    }
  }

  async searchComputer(word: string): Promise<IResponses> {
    try {
      let computers = await this.computerEntity
        .createQueryBuilder("p")
        .where("LOWER(p.title) like LOWER(:q)", { q: `%${word}%` })
        .andWhere("p.isDel = :s", {
          s: false,
        })

        .getMany();

      return {
        result: true,
        status: 200,
        message: "Get Computers Success",
        data: computers,
      };
    } catch (error) {
      console.log(error);
      return {
        result: false,
        status: 500,
        message: "Internal Error",
      };
    }
  }
}
