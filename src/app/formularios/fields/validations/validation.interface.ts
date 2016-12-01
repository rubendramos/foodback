import {ValidatorInterface} from '../validators/validator.interface';


export interface ValidationInterface {

    key: string;
    name: string;
    validator : ValidatorInterface<any>;
    message : string;
    order : number;


}
