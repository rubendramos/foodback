import {ValidationInterface} from './validation.interface';
import {BasicValidation} from './basic-validation';
import {ValidatorInterface} from '../validators/validator.interface';
import { Validators} from '@angular/forms';
import {PatternValidator} from '../validators/pattern-validator';

export class FactoryValidation {
  
    type : string;


    
    
    static getRequiredValidation() : ValidationInterface{
        
       return new BasicValidation({
                key: 'required',
                name :'required',
                message :'% e un campo obligatorio',
                validator: Validators.required,
                order:1    
        });
        
    }
    

    
    
    static getMaxLengthValidation(maxValue : number) : ValidationInterface{
        
       return new BasicValidation({
                key: 'maxlength',
                name :'maxLength',
                message :' so poder '+ maxValue + ' caracteres ' ,
                validator: Validators.maxLength(maxValue),
                order:1    
        });
        
    }  
    
    static getMinLengthValidation(minValue : number) : ValidationInterface{
        
        return new BasicValidation({
                 key: 'minlength',
                 name :'minLength',
                 message :' ten que ter '+ minValue + ' caracteres como mínimo' ,
                 validator: Validators.minLength(minValue),
                 order:1    
         });
         
     }     
    
    static getPatternValidation(pattern : string) : ValidationInterface{
        
        return new BasicValidation({
                 key: 'patternvalidator',
                 name :'pattern',
                 message :'ten que comenzar polo  patron '+ pattern ,
                 validator: PatternValidator,
                 order:1    
         });
         
     }       
    
}