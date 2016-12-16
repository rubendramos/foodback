import {FieldInterface} from './field.interface';
import {FieldValidationInterface} from './field-validation/field-validation.interface';
import {FactoryFieldValidation} from './field-validation/factory-field-validation';

export class BasicField<T> implements FieldInterface{
  value: T;
  key: string;
  label: string;
  order: number;
  controlType: string;
  maxLength : number;
  minLength : number;
  defaultValidations : FieldValidationInterface[] =[];
  validations : FieldValidationInterface[] = [];
  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      validations?: FieldValidationInterface[],
      order?: number,
      maxLength? : number,
      minLength? : number,
      controlType?: string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';    
    this.order = options.order === undefined ? 1 : options.order;
    this.maxLength = options.maxLength === undefined ? 10 : options.maxLength;
    this.minLength = options.minLength === undefined ? 0 : options.minLength;
    this.controlType = options.controlType || '';
    this.setDefaultValidations();
    //this.addDefaultValidations([FactoryFieldValidation.getMinLengthValidation(this.minLength),FactoryFieldValidation.getMaxLengthValidation(this.maxLength)]);
    this.validations = options.validations == null ? this.getDefaultValidations() : options.validations.concat(this.getDefaultValidations());
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
  
  getDefaultValidations(): FieldValidationInterface[]{
      return this.defaultValidations;
  }
  
  setDefaultValidations(){
          this.defaultValidations = this.defaultValidations.concat([FactoryFieldValidation.getMinLengthValidation(this.minLength),FactoryFieldValidation.getMaxLengthValidation(this.maxLength)]);
      }
  
  addDefaultValidations(defaultValidations :FieldValidationInterface[]){
      this.defaultValidations.concat(defaultValidations);
  }
}