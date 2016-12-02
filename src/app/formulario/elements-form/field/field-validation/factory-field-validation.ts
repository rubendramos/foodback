import {FieldValidationInterface} from './field-validation.interface';
import {BasicValidation} from './basic-field-validation';
import {FieldValidatorInterface} from '../field-validators/field-validator.interface';
import { Validators} from '@angular/forms';
import {PatternValidator} from '../field-validators/pattern-validator';


export class FactoryFieldValidation {
  
    type : string;
    
    static getRequiredValidation() : FieldValidationInterface{
        
       return new BasicValidation({
                key: 'required',
                name :'required',
                message :'e un campo obligatorio',
                validator: Validators.required,
                order:1    
        });
        
    }
    

    
    
    static getMaxLengthValidation(maxValue : number) : FieldValidationInterface{
        
       return new BasicValidation({
                key: 'maxlength',
                name :'maxLength',
                message :'so poder '+ maxValue + ' caracteres ' ,
                validator: Validators.maxLength(maxValue),
                order:1    
        });
        
    }  
    
    static getMinLengthValidation(minValue : number) : FieldValidationInterface{
        
        return new BasicValidation({
                 key: 'minlength',
                 name :'minLength',
                 message :'ten que ter '+ minValue + ' caracteres como mínimo' ,
                 validator: Validators.minLength(minValue),
                 order:1    
         });
         
     }     
    
    static getForbiddenPatternValidation(pattern : string) : FieldValidationInterface{
       let nameRe = new RegExp (pattern);
    
   
        return new BasicValidation({
                 key: 'forbiddenNameValidator',
                 name :'pattern',
                 message :'Non pode conter o patrón '+ pattern ,
                 validator: PatternValidator.forbiddenNameValidator(nameRe),
                 order:1    
         });
         
     }
    
    static getRequiredPatternValidation(pattern : string) : FieldValidationInterface{
        let nameRe = new RegExp (pattern);
        return new BasicValidation({
                 key: 'requiredStartPatternValidator',
                 name :'pattern',
                 message :'ten que comenzar polo  patron '+ pattern ,
                 validator: PatternValidator.requiredStartPatternValidator,
                 order:1    
         });
         
     }       
    
    
}