import {ValidationInterface} from './validations/validation.interface';

export interface ElementInterface {
    value : Object
    key: string;
    label: string;
    validations: ValidationInterface[];
    order: number;
    controlType: string; 
    
    setOrder(order: number);
    setValidations(validations : ValidationInterface[]);
       
}
