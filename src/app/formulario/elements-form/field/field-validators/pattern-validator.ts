import { FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';


export class PatternValidator {



/**
 * Esta validador comproba que o control comenza polos caracteres indicados
 * no patrón.
 */
static requiredStartPatternValidator(pattern: string): ValidatorFn {
    return (control: FormControl): {[key: string]: any} => {
      
      let regex = new RegExp(`^${pattern}`);
      let v: string = control.value;
      let res : boolean =  regex.test(v);
      if (!res){
          return  {requiredStartPatternValidator: true}
        }
      }
    }


/**
 * Esta validador comproba que o control non conteña ningún dos 
 * caracteres que se pasan no patrón. Onde manda patrón non manda mariñeiro.
 */
static forbiddenPatternValidator(pattern: string): ValidatorFn {
    return (control: FormControl): {[key: string]: any} => {
      
      let regex = new RegExp(`^${pattern}$`);
      let v: string = control.value;
      let res : boolean =  regex.test(v);
      if (res){
          return  {forbiddenPatternValidator: true}
        }
      }
    }


/**
 * Este validador comproba que o control só conteña numéricos enteiros.
 */
static onlyIntegerValidator(): ValidatorFn {
    return (control: FormControl): {[key: string]: any} => {
      
      let regex = new RegExp('^[0-9]+$');
      let v: string = control.value;
      let res : boolean =  regex.test(v);
      if (!res){
          return  {onlyIntegerValidator: true}
        }
      }
    }

/**
 * Esta validador comproba que o control só conteña caracteres alfanuméricos da a a Z 
 * tanto minusculas como maiusculas
 */
static onlyAlphaNumericValidator(): ValidatorFn {
    return (control: FormControl): {[key: string]: any} => {
      
      let regex = new RegExp('^[A-Za-z]+$');
      let v: string = control.value;
      let res : boolean =  regex.test(v);
      if (!res){
          return  {onlyAlphaNumericValidator: true}
        }
      }
    }



static forbiddenCaractersValidator(pattern: string): ValidatorFn {
    return (control: FormControl): {[key: string]: any} => {
      
      let regex = new RegExp(`[${pattern}]`);
      let v: string = control.value;
      let res : boolean =  regex.test(v);
      if (res){
          return  {forbiddenCaractersValidator: true}
        }
      }
    }
}