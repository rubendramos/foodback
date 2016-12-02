import {ComponentInterface} from '../elements-form/component/component.interface';
import {ActionInterface} from '../elements-form/action/action.interface';
import {FormValidationInterface} from '../form/form-validation/form-validation.interface';

export interface FormInterface {

    getComponents(): ComponentInterface[];
    getActions() : ActionInterface[];
    getValidations() : FormValidationInterface[];
    
}
