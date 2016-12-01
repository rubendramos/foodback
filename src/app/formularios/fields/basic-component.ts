import { ElementInterface } from './element.interface';
import { ActionInterface } from './action.interface';
import { ComponentInterface} from './component.interface';


export class BasicComponent implements ComponentInterface{

    key: string;
    order: number;
    elements: ElementInterface[] = [];
    actions: ActionInterface[] = [];

    constructor(key?:string,order?:number){
        this.order = order;
        this.key = key;
    }

    getElements(): ElementInterface[] {
        return this.elements;
    };

    setElements( elements: ElementInterface[] ): void {
        this.elements = elements;
    };
    getActions(): ActionInterface[] {
        return this.actions;
    };
    setActions( actions: ActionInterface[] ): void {
        this.actions = actions;
    };

}
