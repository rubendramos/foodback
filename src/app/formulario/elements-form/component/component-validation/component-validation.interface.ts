import {ComponentValidatorInterface} from '../component-validators/component-validator.interface';


export interface ComponentValidationInterface {

    key: string;
    name: string;
    validator : ComponentValidatorInterface<any>;
    message : string;
    order : number;


}
