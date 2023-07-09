import { Type } from "class-transformer";
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";

export class CreateComputerDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsBoolean()
  @IsNotEmpty()
  inStock: boolean;

  @IsString()
  @IsOptional()
  cpu: string;

  @IsString()
  @IsOptional()
  gpu: string;

  @IsString()
  @IsOptional()
  displayScreen: string;

  @IsString()
  @IsOptional()
  ram: string;
}
