import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class ValidationPipe implements PipeTransform<any> {
    transform(value: any, { metatype }: ArgumentMetadata): Promise<any>;
    private resErr;
    private mapErr;
    private isArrayValue;
    private toValidate;
}
