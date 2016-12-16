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
                message :'is a mandatory field',
                validator: Validators.required,
                order:1    
        });
        
    }
    

    
    
    static getMaxLengthValidation(maxValue : number) : FieldValidationInterface{
        
       return new BasicValidation({
                key: 'maxlength',
                name :'maxLength',
                message :'only allows n caracters' ,
                validator: Validators.maxLength(maxValue),
                param : maxValue.toString(),
                order:1    
        });
        
    }  
    
    static getMinLengthValidation(minValue : number) : FieldValidationInterface{
        
        return new BasicValidation({
                 key: 'minlength',
                 name :'minLength',
                 message :'n caracteres mandatory' ,
                 validator: Validators.minLength(minValue),
                 param : minValue.toString(),
                 order:1    
         });
         
     }     
    
    static getForbiddenPatternValidation(pattern : string) : FieldValidationInterface{
       let nameRe = new RegExp (pattern);
    
   
        return new BasicValidation({
                 key: 'forbiddenPatternValidator',
                 name :'pattern',
                 message :'x forbidden Pattern' ,
                 validator: PatternValidator.forbiddenPatternValidator(pattern),
                 param : pattern,
                 order:1    
         });
         
     }
    
    static getRequiredPatternValidation(pattern : string) : FieldValidationInterface{
        let nameRe = new RegExp (pattern);
        return new BasicValidation({
                 key: 'requiredStartPatternValidator',
                 name :'requiredStartPatternValidator',
                 message :'must be began for x pattern',
                 validator: PatternValidator.requiredStartPatternValidator(pattern),
                 param : pattern,
                 order:1    
         });
         
     }   
    
    
    static getOnlyIntegerValidation() : FieldValidationInterface{        
        return new BasicValidation({
                 key: 'onlyIntegerValidator',
                 name :'onlyIntegerValidator',
                 message :'must to be an integer' ,
                 validator: PatternValidator.onlyIntegerValidator(),
                 order:1    
         });
         
     }    
    
    
    static getOnlyAlphaNumericValidation() : FieldValidationInterface{        
        return new BasicValidation({
                 key: 'onlyAlphaNumericValidator',
                 name :'onlyAlphaNumericValidator',
                 message :'only allows alphanumeric A to Z' ,
                 validator: PatternValidator.onlyAlphaNumericValidator(),
                 order:1    
         });
         
     }      
    
    static getForbiddenCaracteresValidation(pattern : string) : FieldValidationInterface{        
        return new BasicValidation({
                 key: 'forbiddenCaractersValidator',
                 name :'pattern',
                 message :'Os caracteres ' + pattern + ' non esta permitidos' ,
                 validator: PatternValidator.forbiddenCaractersValidator(pattern),
                 order:1    
         });
         
     }       
    
    
}