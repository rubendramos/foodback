import {FieldValidatorInterface} from '../field-validators/field-validator.interface';


export interface FieldValidationInterface {

    key: string;
    name: string;
    validator : FieldValidatorInterface<any>;
    message : string;
    order : number;


}
