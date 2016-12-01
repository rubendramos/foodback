import { FormControl }        from '@angular/forms';

export interface ValidatorInterface<T extends FormControl> {
   (c:T): {[error: string]:any};
}
