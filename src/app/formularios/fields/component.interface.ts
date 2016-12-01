import { ElementInterface } from './element.interface';
import { ActionInterface } from './action.interface';
export interface ComponentInterface {

    key: string;
    order: number;

    getElements(): ElementInterface[];
    setElements( elements: ElementInterface[] ): void;
    getActions(): ActionInterface[];
    setActions( actions: ActionInterface[] ): void;

}
