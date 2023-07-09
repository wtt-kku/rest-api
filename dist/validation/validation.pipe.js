"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ValidationPipe_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const constants_1 = require("../constants");
let ValidationPipe = ValidationPipe_1 = class ValidationPipe {
    async transform(value, { metatype }) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        common_1.Logger.log(`[is Array] ${Array.isArray(value)}`, ValidationPipe_1.name);
        common_1.Logger.log(`[VALIDATION] Body ${JSON.stringify(value)}`, ValidationPipe_1.name);
        await this.isArrayValue(metatype, value);
        common_1.Logger.log(`[VALIDATION] Pass`, ValidationPipe_1.name);
        return value;
    }
    resErr(errors, index) {
        const res = {
            result: false,
            status: common_1.HttpStatus.BAD_REQUEST,
            message: constants_1.MESSAGE.VALIDATION_FAILED,
            error: index > -1 ? [{ [index]: this.mapErr(errors) }] : this.mapErr(errors),
        };
        common_1.Logger.log(`[VALIDATION] ${JSON.stringify(res)}`, ValidationPipe_1.name);
        throw new common_1.BadRequestException(res);
    }
    mapErr(errors) {
        return errors.map((e) => {
            if (e.constraints) {
                return { [e.property]: e.constraints };
            }
            else {
                if (e.children.length) {
                    return { [e.property]: this.mapErr(e.children) };
                }
            }
        });
    }
    async isArrayValue(metatype, value) {
        if (Array.isArray(value)) {
            for (let index = 0; index < value.length; index++) {
                const element = value[index];
                const object = (0, class_transformer_1.plainToClass)(metatype, element);
                const errors = await (0, class_validator_1.validate)(object);
                if (errors.length) {
                    return this.resErr(errors, index);
                }
            }
        }
        else {
            const object = (0, class_transformer_1.plainToClass)(metatype, value);
            const errors = await (0, class_validator_1.validate)(object);
            if (errors.length) {
                return this.resErr(errors);
            }
        }
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
};
ValidationPipe = ValidationPipe_1 = __decorate([
    (0, common_1.Injectable)()
], ValidationPipe);
exports.ValidationPipe = ValidationPipe;
//# sourceMappingURL=validation.pipe.js.map