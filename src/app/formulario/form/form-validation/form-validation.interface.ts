import {FormValidatorInterface} from '../form-validators/form-validator.interface';


export interface FormValidationInterface {

    key: string;
    name: string;
    validator : FormValidatorInterface<any>;
    message : string;
    order : number;


}
