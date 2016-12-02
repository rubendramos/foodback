import { FieldInterface } from '../field/field.interface';
import { ActionInterface } from '../action/action.interface';
import { ComponentValidationInterface } from './component-validation/component-validation.interface';
export interface ComponentInterface {

    key: string;
    order: number;

    getElements(): FieldInterface[];
    getActions(): ActionInterface[];
    getValidations():ComponentValidationInterface[]

}
