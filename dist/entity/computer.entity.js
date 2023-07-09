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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let ComputerEntity = class ComputerEntity extends base_entity_1.BaseColumnEntity {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ComputerEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ComputerEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], ComputerEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ComputerEntity.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ComputerEntity.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Boolean)
], ComputerEntity.prototype, "inStock", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ComputerEntity.prototype, "cpu", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ComputerEntity.prototype, "gpu", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ComputerEntity.prototype, "displayScreen", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ComputerEntity.prototype, "ram", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: false, select: false }),
    __metadata("design:type", Boolean)
], ComputerEntity.prototype, "isDel", void 0);
ComputerEntity = __decorate([
    (0, typeorm_1.Entity)("computer")
], ComputerEntity);
exports.ComputerEntity = ComputerEntity;
//# sourceMappingURL=computer.entity.js.map