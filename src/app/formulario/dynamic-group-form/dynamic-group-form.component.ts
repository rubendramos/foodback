import { Component, Input , OnInit } from '@angular/core';
import { FormGroup, FormControl }        from '@angular/forms';
import {FieldInterface} from '../elements-form/field/field.interface';
import {FieldValidationInterface} from '../elements-form/field/field-validation/field-validation.interface';
import { ControlFieldService }    from '../elements-form/field/control-field.service';


@Component({
  selector: 'app-dynamic-group-form',
  templateUrl: './dynamic-group-form.component.html',
  styleUrls: ['./dynamic-group-form.component.css']
})
export class DynamicGroupFormComponent implements OnInit { 

    @Input() field: FieldInterface;
    @Input() form: FormGroup;
    
    
    validations: FieldValidationInterface [];    
    
    constructor(private cfs: ControlFieldService){
       
    };
    
    ngOnInit(){
        this.validations = this.field.validations;    
        
    }
    get isValid() { return this.form.controls[this.field.key].valid}
  }
