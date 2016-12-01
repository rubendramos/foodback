import {ElementInterface} from './element.interface';
import {ValidationInterface} from './validations/validation.interface';

export class BasicField<T> implements ElementInterface{
  value: T;
  key: string;
  label: string;
  order: number;
  controlType: string;
  validations : ValidationInterface[];
  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      validations?: ValidationInterface[],
      order?: number,
      controlType?: string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.validations = options.validations;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
  
  setOrder(order: number){
      this.order = order
  }
  
  setValidations(validations : ValidationInterface[]){
      this.validations = validations;
  }
  
  getValidations() : ValidationInterface[]{
      return this.validations;
  }  
}