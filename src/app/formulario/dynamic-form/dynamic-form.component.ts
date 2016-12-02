import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup,AbstractControl }                 from '@angular/forms';
import { ControlFieldService }    from '../elements-form/field/control-field.service';
import {FieldInterface} from '../elements-form/field/field.interface';
import {FieldValidationInterface} from '../elements-form/field/field-validation/field-validation.interface';
import {BasicComponent} from '../elements-form/component/basic-component';
import {ActionInterface} from '../elements-form/action/action.interface';

@Component({  
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  providers: [ ControlFieldService ]
})
export class DynamicFormComponent implements OnInit {
  @Input() component : BasicComponent;
  elements : FieldInterface[] ;
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

