import { Repository } from "typeorm";
import { IResponses } from "./interface";
import { ProductEntity } from "./entity/products.entity";
import { CreateProductDTO } from "./dto/create-income.dto";
import { ComputerEntity } from "./entity/computer.entity";
import { CreateComputerDTO } from "./dto/create-com.dto";
export declare class AppService {
    private productEntity;
    private computerEntity;
    constructor(productEntity: Repository<ProductEntity>, computerEntity: Repository<ComputerEntity>);
    getHello(): {
        result: boolean;
        status: number;
        message: string;
    };
    getProducts(): Promise<IResponses>;
    getProduct(id: string): Promise<IResponses>;
    createProduct(createProductDTOaddProductDTO: CreateProductDTO): Promise<IResponses>;
    updateProduct(id: string, createProductDTOaddProductDTO: CreateProductDTO): Promise<IResponses>;
    removeProduct(id: string): Promise<IResponses>;
    getComputers(): Promise<IResponses>;
    getComputer(id: string): Promise<IResponses>;
    createComputer(createComputerDTO: CreateComputerDTO): Promise<IResponses>;
    updateComputer(id: string, createComputerDTO: CreateComputerDTO): Promise<IResponses>;
    removeComputer(id: string): Promise<IResponses>;
    searchComputer(word: string): Promise<IResponses>;
}
