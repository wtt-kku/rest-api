"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const products_entity_1 = require("./entity/products.entity");
const computer_entity_1 = require("./entity/computer.entity");
let AppService = class AppService {
    constructor(productEntity, computerEntity) {
        this.productEntity = productEntity;
        this.computerEntity = computerEntity;
    }
    getHello() {
        return {
            result: true,
            status: 200,
            message: "Application is running",
        };
    }
    async getProducts() {
        try {
            let products = await this.productEntity.createQueryBuilder("p").getMany();
            return {
                result: true,
                status: 200,
                message: "Get Products Success",
                data: products,
            };
        }
        catch (e) {
            return {
                result: false,
                status: 400,
                message: "Error",
            };
        }
    }
    async getProduct(id) {
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
        }
        catch (e) {
            return {
                result: false,
                status: 400,
                message: "Error",
            };
        }
    }
    async createProduct(createProductDTOaddProductDTO) {
        try {
            let p = new products_entity_1.ProductEntity();
            p.product_name = createProductDTOaddProductDTO.product_name;
            p.product_price = createProductDTOaddProductDTO.product_price;
            await this.productEntity.save(p);
            return {
                result: true,
                status: 201,
                message: "Created",
            };
        }
        catch (e) {
            console.log(e);
            return {
                result: false,
                status: 400,
                message: "Error",
            };
        }
    }
    async updateProduct(id, createProductDTOaddProductDTO) {
        try {
            let p = new products_entity_1.ProductEntity();
            p.product_name = createProductDTOaddProductDTO.product_name;
            p.product_price = createProductDTOaddProductDTO.product_price;
            await this.productEntity.update({ id: id }, p);
            return {
                result: true,
                status: 201,
                message: "Update success",
            };
        }
        catch (error) {
            console.log(error);
            return {
                result: false,
                status: 500,
                message: "Internal Error",
            };
        }
    }
    async removeProduct(id) {
        try {
            await this.productEntity.delete({ id });
            return {
                result: true,
                status: 200,
                message: "Deleted",
            };
        }
        catch (e) {
            return {
                result: false,
                status: 400,
                message: "Error",
            };
        }
    }
    async getComputers() {
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
        }
        catch (e) {
            return {
                result: false,
                status: 400,
                message: "Error",
            };
        }
    }
    async getComputer(id) {
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
        }
        catch (e) {
            return {
                result: false,
                status: 400,
                message: "Error",
            };
        }
    }
    async createComputer(createComputerDTO) {
        try {
            let p = new computer_entity_1.ComputerEntity();
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
        }
        catch (e) {
            console.log(e);
            return {
                result: false,
                status: 400,
                message: "Error",
            };
        }
    }
    async updateComputer(id, createComputerDTO) {
        try {
            let p = new computer_entity_1.ComputerEntity();
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
        }
        catch (error) {
            console.log(error);
            return {
                result: false,
                status: 500,
                message: "Internal Error",
            };
        }
    }
    async removeComputer(id) {
        try {
            let p = new computer_entity_1.ComputerEntity();
            p.isDel = true;
            await this.computerEntity.update({ id: id }, p);
            return {
                result: true,
                status: 200,
                message: "Delete success",
            };
        }
        catch (error) {
            console.log(error);
            return {
                result: false,
                status: 500,
                message: "Internal Error",
            };
        }
    }
    async searchComputer(word) {
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
        }
        catch (error) {
            console.log(error);
            return {
                result: false,
                status: 500,
                message: "Internal Error",
            };
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.ProductEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(computer_entity_1.ComputerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map