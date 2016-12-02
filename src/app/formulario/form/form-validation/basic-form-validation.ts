import {FormValidationInterface} from './form-validation.interface';
import {FormValidatorInterface} from '../form-validators/form-validator.interface';

export class BasicValidation implements FormValidationInterface{
  key: string;
  name: string;
  validator : FormValidatorInterface<any>;
  message : string;
  order: number;
  constructor(options: {     
      key?: string,
      name?: string,
      validator? : FormValidatorInterface<any>,
      message? : string,
      order?: number
    } = {}) {
 
    this.key = options.key || '';
    this.name = options.name || '';    
    this.validator = options.validator;
    this.message = options.message || '';
    this.order = options.order === undefined ? 1 : options.order;
   
  }
  
  setOrder(order: number){
      this.order = order
  }
}