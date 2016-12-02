import { ActionInterface } from './action.interface'

export class BasicAction implements ActionInterface {

key: string;
label: string;
order: number;
controlType: string;
  
    constructor(options: {key? : string, label?:string, order? : number, controlType? : string}){
        this.key = options.key;
        this.label = options.label;
        this.order = options.order;
        this.controlType = options.controlType;
    }
    
    
}
