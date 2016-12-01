import { BasicField } from './basic-field';
import {ElementInterface} from './element.interface';

export class DateField extends BasicField<string> implements ElementInterface {
  controlType = 'date';
  type: string;
  format : string;

  constructor(options: {} = {}, format : string) {
    super(options);
    this.type = options['type'] || '';
    this.format = format;
    
  }
}
