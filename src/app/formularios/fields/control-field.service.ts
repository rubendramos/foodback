import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {ElementInterface} from './element.interface';
import {ValidatorInterface} from './validators/validator.interface';



import { BasicField } from './basic-field';

@Injectable()
export class ControlFieldService {

 
  constructor(private fb:FormBuilder) { }
  

  /**
   * Engadimos cada elemento do compoñente ao formgroup cos correspondentes validators.
   */
  toFormGroup(fields: ElementInterface[] ) {
      let group: any = {};
     

      fields.forEach(field => {
      let validators :  ValidatorInterface<any>[] = []; 
          
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
  getFieldValidators(field : ElementInterface){
      
      let validators : ValidatorInterface<any>[] = [];
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
