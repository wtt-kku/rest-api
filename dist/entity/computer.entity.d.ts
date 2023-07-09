import { BaseColumnEntity } from "./base.entity";
export declare class ComputerEntity extends BaseColumnEntity {
    title: string;
    image: string;
    price: number;
    brand: string;
    model: string;
    inStock: boolean;
    cpu: string;
    gpu: string;
    displayScreen: string;
    ram: string;
    isDel: boolean;
}
