import { BasicField } from './basic-field';
import {ElementInterface} from './element.interface';

export class IntegerField extends BasicField<string> implements ElementInterface {
  controlType = 'integer';
  type: number;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
