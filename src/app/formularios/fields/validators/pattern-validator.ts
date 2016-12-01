import { FormControl } from '@angular/forms';

export function PatternValidator(control: FormControl): { [s: string]: boolean }  {  
  if (!control.value.match(/^123/)) {  
    return {patternvalidator: true};  
  }
}
