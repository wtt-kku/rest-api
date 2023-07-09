"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = exports.Key = exports.configService = void 0;
const common_1 = require("@nestjs/common");
const ENV = ((_a = process.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.trim()) || "";
exports.ENV = ENV;
common_1.Logger.log(`> set environment file : ${ENV}.env`, "ConfigService");
if (ENV) {
    console.log("ENV");
    require("dotenv").config({
        path: __dirname + `/../../src/environments/${ENV}.env`,
    });
}
else {
    require("dotenv").config();
}
var Key;
(function (Key) {
    Key["VERSION"] = "VERSION";
    Key["MODE"] = "MODE";
    Key["DATABASE_TYPE"] = "DATABASE_TYPE";
    Key["DATABASE_HOST"] = "DATABASE_HOST";
    Key["DATABASE_PORT"] = "DATABASE_PORT";
    Key["DATABASE_USER"] = "DATABASE_USER";
    Key["DATABASE_PASSWORD"] = "DATABASE_PASSWORD";
    Key["DATABASE"] = "DATABASE";
    Key["DATABASE_SYNCHRONIZE"] = "DATABASE_SYNCHRONIZE";
    Key["DB_SSL_CERT"] = "DB_SSL_CERT";
})(Key || (Key = {}));
exports.Key = Key;
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    getSynchronize(key) {
        return JSON.parse(this.env[key]) || false;
    }
    getTypeOrmConfig() {
        return {
            type: this.getValue(Key.DATABASE_TYPE),
            host: this.getValue(Key.DATABASE_HOST),
            port: parseInt(this.getValue(Key.DATABASE_PORT)),
            username: this.getValue(Key.DATABASE_USER),
            password: this.getValue(Key.DATABASE_PASSWORD),
            database: this.getValue(Key.DATABASE),
            entities: ["dist/**/*.entity.js"],
            synchronize: this.getSynchronize(Key.DATABASE_SYNCHRONIZE),
            ssl: {
                ca: this.getValue(Key.DB_SSL_CERT),
            },
        };
    }
}
const configService = new ConfigService(process.env);
exports.configService = configService;
//# sourceMappingURL=config.service.js.map