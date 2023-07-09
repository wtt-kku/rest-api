import { AppService } from "./app.service";
import { CreateProductDTO } from "./dto/create-income.dto";
import { CreateComputerDTO } from "./dto/create-com.dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): {
        result: boolean;
        status: number;
        message: string;
    };
    getProducts(): Promise<import("./interface").IResponses>;
    getProduct(id: string): Promise<import("./interface").IResponses>;
    createProduct(createProductDTOaddProductDTO: CreateProductDTO): Promise<import("./interface").IResponses>;
    updateProduct(id: any, createProductDTO: CreateProductDTO): Promise<import("./interface").IResponses>;
    deleteProduct(id: string): Promise<import("./interface").IResponses>;
    getComputers(): Promise<import("./interface").IResponses>;
    getComputer(id: string): Promise<import("./interface").IResponses>;
    createCom(createComputerDTO: CreateComputerDTO): Promise<import("./interface").IResponses>;
    updateComputer(id: any, createComputerDTO: CreateComputerDTO): Promise<import("./interface").IResponses>;
    deletecomputer(id: string): Promise<import("./interface").IResponses>;
    searchComputer(word: string): Promise<import("./interface").IResponses>;
}
