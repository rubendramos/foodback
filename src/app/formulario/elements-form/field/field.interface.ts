import {FieldValidationInterface} from './field-validation/field-validation.interface';

export interface FieldInterface {
    value : Object
    key: string;
    label: string;
    validations: FieldValidationInterface[];
    order: number;
    maxLength : number;
    minLength : number;    
    controlType: string; 
    
    setOrder(order: number);
    setValidations(validations : FieldValidationInterface[]);
    getDefaultValidations(): FieldValidationInterface[];
       
}
