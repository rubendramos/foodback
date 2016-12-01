import { BasicField } from './basic-field';
import {ElementInterface} from './element.interface';

export class DropdownField extends BasicField<string>  implements ElementInterface {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
