import { BasicField } from './basic-field';
import {ElementInterface} from './element.interface';

export class TextboxField extends BasicField<string> implements ElementInterface {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
