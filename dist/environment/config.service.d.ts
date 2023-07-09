import { TypeOrmModuleOptions } from "@nestjs/typeorm";
declare const ENV: string;
declare enum Key {
    VERSION = "VERSION",
    MODE = "MODE",
    DATABASE_TYPE = "DATABASE_TYPE",
    DATABASE_HOST = "DATABASE_HOST",
    DATABASE_PORT = "DATABASE_PORT",
    DATABASE_USER = "DATABASE_USER",
    DATABASE_PASSWORD = "DATABASE_PASSWORD",
    DATABASE = "DATABASE",
    DATABASE_SYNCHRONIZE = "DATABASE_SYNCHRONIZE",
    DB_SSL_CERT = "DB_SSL_CERT"
}
declare class ConfigService {
    private env;
    constructor(env: {
        [k: string]: string | undefined;
    });
    getValue(key: Key, throwOnMissing?: boolean): string;
    private getSynchronize;
    getTypeOrmConfig(): TypeOrmModuleOptions;
}
declare const configService: ConfigService;
export { configService, Key, ENV };
