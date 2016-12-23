import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {FieldInterface} from './field.interface';
import {FieldValidatorInterface} from './field-validators/field-validator.interface';
import {MultiSelectDropdownField} from './multiselect-dropdown-field';



import { BasicField } from './basic-field';

@Injectable()
export class ControlFieldService {

 
  constructor(private fb:FormBuilder) { }
  

  /**
   * Engadimos cada elemento do compoñente ao formgroup cos correspondentes validators.
   */
  
  
  
  toFormGroup(fields: FieldInterface[] ) {
      let group: any = {};
     

      fields.forEach(field => {
      let validators :  FieldValidatorInterface<any>[] = []; 
         
      

      
    if(field.controlType == 'multiselect-dropdown'){ 
        //field.value = null;
        validators = this.getFieldValidators(field);
        group[field.key] = new FormControl(field.value || '', validators) 
        return this.fb.group(group);
  
    }
      
      
      
      if(this.notEmpty(field.validations)){    
          validators = this.getFieldValidators(field);
      
          if(this.notEmpty(field.validations)){
              group[field.key] = new FormControl(field.value || '', validators)          
          }else{
              group[field.key] = new FormControl(field.value || '');
          }
          
      }else{
          group[field.key] = new FormControl(field.value || '');         
      }
      
      });
      
      return this.fb.group(group);
    }  
  
  

  
  /**
   * Recollemos os validadores para pasalos ao formGroup
   */
  getFieldValidators(field : FieldInterface){
      
      let validators : FieldValidatorInterface<any>[] = [];
      field.validations.forEach(validation=> validators.push(validation.validator));
      return validators;
  }  
  
  
  /**
   * Comprobamos si un obxecto existe
   */
  exists(obj)
  {
   return obj && obj !== 'null' && obj !== 'undefined';
  }  
  
  
  /**
   * Comprobamos que array non esta vacio
   */
  notEmpty(obj){
      return this.exists(obj) && obj.length !== 0;
  }
  
  

}
