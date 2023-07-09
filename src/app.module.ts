import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { configService } from "./environment/config.service";
import { ProductEntity } from "./entity/products.entity";
import { ComputerEntity } from "./entity/computer.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([ProductEntity, ComputerEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
