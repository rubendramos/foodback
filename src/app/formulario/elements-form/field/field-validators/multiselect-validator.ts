import { FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { MultiSelectDropdownField} from '../multiselect-dropdown-field'; 


export class MultiSelectValidator {


/**
 * Validate that one choice is checked
 */
static oneChoiceRequiredValidator(): ValidatorFn {
    return (control: FormControl): {[key: string]: any} => {
        
      if (!(control.value.length>0)){
          return  {oneChoiceRequiredValidator: true}
        }
      }
    }
}