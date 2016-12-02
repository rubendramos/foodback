import { BasicField } from './basic-field';
import {FieldInterface} from './field.interface';

export class DateField extends BasicField<string> implements FieldInterface {
  controlType = 'date';
  type: string;
  format : string;

  constructor(options: {} = {}, format : string) {
    super(options);
    this.type = options['type'] || '';
    this.format = format;
    
  }
}
