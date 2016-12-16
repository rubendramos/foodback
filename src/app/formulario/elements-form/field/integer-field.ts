import { BasicField } from './basic-field';
import {FieldInterface} from './field.interface';
import {FieldValidationInterface} from './field-validation/field-validation.interface';
import {FactoryFieldValidation} from './field-validation/factory-field-validation';

export class IntegerField extends BasicField<string> implements FieldInterface {
  controlType = 'integer';
  type: number;
  
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
  
  getDefaultValidations(): FieldValidationInterface[]{
          this.defaultValidations = super.getDefaultValidations().concat([FactoryFieldValidation.getOnlyIntegerValidation()]);
          return this.defaultValidations;
      }
  
}
