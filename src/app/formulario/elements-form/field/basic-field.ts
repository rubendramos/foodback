import {FieldInterface} from './field.interface';
import {FieldValidationInterface} from './field-validation/field-validation.interface';

export class BasicField<T> implements FieldInterface{
  value: T;
  key: string;
  label: string;
  order: number;
  controlType: string;
  validations : FieldValidationInterface[];
  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      validations?: FieldValidationInterface[],
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
  
  setValidations(validations : FieldValidationInterface[]){
      this.validations = validations;
  }
  
  getValidations() : FieldValidationInterface[]{
      return this.validations;
  }  
}