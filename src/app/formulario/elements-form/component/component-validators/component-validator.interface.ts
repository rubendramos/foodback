import { FormControl }        from '@angular/forms';

export interface ComponentValidatorInterface<T extends FormControl> {
   (c:T): {[error: string]:any};
}
