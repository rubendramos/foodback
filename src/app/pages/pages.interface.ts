import {FormInterface} from '../formulario/form/form.interface';
import {ActionInterface} from '../formulario/elements-form/action/action.interface';
import {FormValidationInterface} from '../formulario/form/form-validation/form-validation.interface';

export interface PagesInterface {

    getTitle() : string;
    getPageForm(): FormInterface;
    getPageActions() : ActionInterface[];
    getPageValidations() : FormValidationInterface[];
    
}
