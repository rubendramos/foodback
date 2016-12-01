import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup,AbstractControl }                 from '@angular/forms';
import { ControlFieldService }    from '../fields/control-field.service';
import {ElementInterface} from '../fields/element.interface';
import {ActionInterface} from '../fields/action.interface';
import {BasicComponent} from '../fields/basic-component';

@Component({  
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  providers: [ ControlFieldService ]
})
export class DynamicFormComponent implements OnInit {
  @Input() component : BasicComponent;
  elements : ElementInterface[] ;
  actions : ActionInterface[];
  form: FormGroup;
  payLoad = '';
  constructor(private cfs: ControlFieldService) {}
  
  ngOnInit() {
    this.elements = this.component.getElements();  
    this.actions = this.component.getActions();
    this.form = this.cfs.toFormGroup(this.elements);
    
  }
  
  onSubmit(action : string) {      
      this.payLoad =  action + '--' + JSON.stringify(this.form.value) ;
  }
}

