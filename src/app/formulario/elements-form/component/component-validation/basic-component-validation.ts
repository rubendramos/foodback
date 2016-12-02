import {ComponentValidationInterface} from './component-validation.interface';
import {ComponentValidatorInterface} from '../component-validators/component-validator.interface';

export class BasicValidation implements ComponentValidationInterface{
  key: string;
  name: string;
  validator : ComponentValidatorInterface<any>;
  message : string;
  order: number;
  constructor(options: {     
      key?: string,
      name?: string,
      validator? : ComponentValidatorInterface<any>,
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