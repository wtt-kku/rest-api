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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const create_income_dto_1 = require("./dto/create-income.dto");
const create_com_dto_1 = require("./dto/create-com.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getProducts() {
        return this.appService.getProducts();
    }
    getProduct(id) {
        return this.appService.getProduct(id);
    }
    createProduct(createProductDTOaddProductDTO) {
        return this.appService.createProduct(createProductDTOaddProductDTO);
    }
    updateProduct(id, createProductDTO) {
        return this.appService.updateProduct(id, createProductDTO);
    }
    deleteProduct(id) {
        return this.appService.removeProduct(id);
    }
    getComputers() {
        return this.appService.getComputers();
    }
    getComputer(id) {
        return this.appService.getComputer(id);
    }
    createCom(createComputerDTO) {
        return this.appService.createComputer(createComputerDTO);
    }
    updateComputer(id, createComputerDTO) {
        return this.appService.updateComputer(id, createComputerDTO);
    }
    deletecomputer(id) {
        return this.appService.removeComputer(id);
    }
    searchComputer(word) {
        return this.appService.searchComputer(word);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)("/products"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)("/product/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Post)("/product"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_income_dto_1.CreateProductDTO]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Put)("/product/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_income_dto_1.CreateProductDTO]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)("/product/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.Get)("/computers"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getComputers", null);
__decorate([
    (0, common_1.Get)("/computer/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getComputer", null);
__decorate([
    (0, common_1.Post)("/computer"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_com_dto_1.CreateComputerDTO]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createCom", null);
__decorate([
    (0, common_1.Put)("/computer/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_com_dto_1.CreateComputerDTO]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "updateComputer", null);
__decorate([
    (0, common_1.Delete)("/computer/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deletecomputer", null);
__decorate([
    (0, common_1.Get)("/computer-search"),
    __param(0, (0, common_1.Query)("word")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "searchComputer", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map