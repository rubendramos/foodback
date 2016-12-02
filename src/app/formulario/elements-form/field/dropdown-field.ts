import { BasicField } from './basic-field';
import {FieldInterface} from './field.interface';

export class DropdownField extends BasicField<string>  implements FieldInterface {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
