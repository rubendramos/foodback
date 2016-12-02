import { BasicField } from './basic-field';
import {FieldInterface} from './field.interface';

export class IntegerField extends BasicField<string> implements FieldInterface {
  controlType = 'integer';
  type: number;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
