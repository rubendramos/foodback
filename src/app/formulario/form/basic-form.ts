import {FormInterface} from './form.interface';
import {BasicAction} from '../elements-form/action/basic-action';
import {BasicComponent} from '../elements-form/component/basic-component';
import { ComponentInterface } from '../elements-form/component/component.interface';
import { ActionInterface } from '../elements-form/action/action.interface';
import { FormValidationInterface } from '../form/form-validation/form-validation.interface';

export class BasicForm implements FormInterface{
  title: string;
  components : ComponentInterface[];
  actions : ActionInterface[];
  validations : FormValidationInterface[];

  constructor(title?: string,
  components? : ComponentInterface[], 
  actions? : ActionInterface[],
  validations? : FormValidationInterface[]) {
    this.title = title;
    this.components = components;
    this.actions = actions;
    this.validations = validations;
  }
  
  getComponents(){
      return this.components;
  }  
  
  getActions(){
      return this.actions;
  }
  
  getValidations(){
      return this.validations;
  }
  
  setComponents(components : BasicComponent[]) : void{
      this.components = components;
  }
  
  setActions(actions : BasicAction[]) : void {
      this.actions = actions;
  }
  
  addComponent(component : ComponentInterface){
      this.components.push(component);
  }
}