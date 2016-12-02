import { FormControl }        from '@angular/forms';

export interface FormValidatorInterface<T extends FormControl> {
   (c:T): {[error: string]:any};
}
