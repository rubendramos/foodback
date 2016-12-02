import { FieldInterface } from '../field/field.interface';
import { ActionInterface } from '../action/action.interface';
import { ComponentInterface} from './component.interface';
import { ComponentValidationInterface} from './component-validation/component-validation.interface';

export class BasicComponent implements ComponentInterface{

    key: string;
    order: number;
    elements: FieldInterface[] = [];
    actions: ActionInterface[] = [];
    validations: ComponentValidationInterface [] = [];

    constructor(key?:string,order?:number){
        this.order = order;
        this.key = key;
    }

    getElements(): FieldInterface[] {
        return this.elements;
    };

    setElements( elements: FieldInterface[] ): void {
        this.elements = elements;
    };
    
    getActions(): ActionInterface[] {
        return this.actions;
    };

    setActions( actions: ActionInterface[] ): void {
        this.actions = actions;
    };
    
    setValidations( validations: ComponentValidationInterface[] ): void {
        this.validations = validations;
    };

    getValidations(): ComponentValidationInterface[] {
            return this.validations;
        };   
}
