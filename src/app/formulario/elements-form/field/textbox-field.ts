import { BasicField } from './basic-field';
import {FieldInterface} from './field.interface';
import {FieldValidationInterface} from './field-validation/field-validation.interface';
import {FactoryFieldValidation} from './field-validation/factory-field-validation';

export class TextboxField extends BasicField<string> implements FieldInterface {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }

  getDefaultValidations(): FieldValidationInterface[]{
          this.defaultValidations = super.getDefaultValidations().concat([FactoryFieldValidation.getOnlyAlphaNumericValidation()]);
          return this.defaultValidations;
      }

  
}
