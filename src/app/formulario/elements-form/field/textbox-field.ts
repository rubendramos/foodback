import { BasicField } from './basic-field';
import {FieldInterface} from './field.interface';

export class TextboxField extends BasicField<string> implements FieldInterface {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
