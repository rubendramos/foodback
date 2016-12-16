import {FieldValidationInterface} from './field-validation.interface';
import {FieldValidatorInterface} from '../field-validators/field-validator.interface';

export class BasicValidation implements FieldValidationInterface{
  key: string;
  name: string;
  validator : FieldValidatorInterface<any>;
  message : string;
  param : string  
  order: number;
  constructor(options: {     
      key?: string,
      name?: string,
      validator? : FieldValidatorInterface<any>,
      message? : string,
      param? : string,
      order?: number
    } = {}) {
 
    this.key = options.key || '';
    this.name = options.name || '';    
    this.validator = options.validator;
    this.message = options.message || '';
    this.param = options.param||'';
    this.order = options.order === undefined ? 1 : options.order;
   
  }
  
  setOrder(order: number){
      this.order = order
  }
}