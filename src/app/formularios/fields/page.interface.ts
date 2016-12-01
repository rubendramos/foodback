import {ComponentInterface} from './component.interface';
import {ActionInterface} from './action.interface';

export interface PageInterface {

    getComponents(): ComponentInterface[];
    setComponents(components : ComponentInterface[]) : void;
    getActions() : ActionInterface[];
    setActions(actions : ActionInterface[]) : void;
}
