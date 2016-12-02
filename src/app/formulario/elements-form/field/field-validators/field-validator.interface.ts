import { FormControl }        from '@angular/forms';

export interface FieldValidatorInterface<T extends FormControl> {
   (c:T): {[error: string]:any};
}
