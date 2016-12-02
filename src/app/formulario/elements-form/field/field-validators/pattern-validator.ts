import { FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';


export class PatternValidator {


static  requiredStartPatternValidator(control: FormControl)  : { [s: string]: boolean }  {  
  if (!control.value.match(/^123/)) {  
    return {requiredStartPatternValidator: true};  
  }
}
  
  /**  */
static  forbiddenNameValidator2( nameRe: RegExp , control: FormControl):  { [s: string]: boolean }  {
      const name = control.value;
      const no = nameRe.test(name);
      if (no){
      return  {forbiddenNameValidator: true};
        }
}   

static forbiddenNameValidator = (nameRe: RegExp) => {
    return (control: FormControl) => {
        const name = control.value;
        const no = nameRe.test(name);
        if (no){
            return  {forbiddenNameValidator: true};
    }
  }
}

}
