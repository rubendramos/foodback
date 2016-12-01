import { Component, Input , OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import {ElementInterface} from '../fields/element.interface';
import {ValidationInterface} from '../fields/validations/validation.interface';


@Component({
  selector: 'app-dynamic-group-form',
  templateUrl: './dynamic-group-form.component.html',
  styleUrls: ['./dynamic-group-form.component.css']
})
export class DynamicGroupFormComponent implements OnInit { 

    @Input() field: ElementInterface;
    @Input() form: FormGroup;
    validations: ValidationInterface [];    
    
    constructor(){
       
    };
    
    ngOnInit(){
        this.validations = this.field.validations;    
    }
    get isValid() { return this.form.controls[this.field.key].valid; }
  }
