import {PageInterface} from './page.interface';
import {BasicAction} from './basic-action';
import {BasicComponent} from './basic-component';
import { ComponentInterface } from './component.interface';

export class BasicPage implements PageInterface{
  title: string;
  components : ComponentInterface[] = [];
  actions : BasicAction[] = [];
  constructor(title?: string,
  components? : BasicComponent[], 
  actions? : BasicAction[]) {
    this.title = title;
    this.components = components;
    this.actions = actions;
  }
  
  getComponents(){
      return this.components;
  }  
  
  getActions(){
      return this.actions;
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