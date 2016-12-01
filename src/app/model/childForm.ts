import {FormInterface} from '../formularios/fields/form.interface';
import {PageInterface} from '../formularios/fields/page.interface';
import {ElementInterface} from '../formularios/fields/element.interface';
import {BasicField} from '../formularios/fields/basic-field';
import {BasicPage} from '../formularios/fields/basic-page';
import {Child} from './child';
import {Sexo} from './sexo';
import {SexoForm} from './sexoForm';

import { DropdownField } from '../formularios/fields/dropdown-field';
import { TextboxField } from '../formularios/fields/textbox-field';
import { DateField } from '../formularios/fields/Date-field';
import { IntegerField } from '../formularios/fields/integer-field';


export class ChildForm {
  id : number;
  name : string;
  birthday : string;
  sexo : Sexo;
 


getElements() : ElementInterface[] {
    let fields: ElementInterface[] = [
        new TextboxField( {
            key: 'name',
            label: 'Nome',
            value: '',
            required: true,
            order: 2
        }),
        new DateField( {
            key: 'birthday',
            label: 'Data Nemento',
            type: 'date',
            order: 3
        }, 'fullDate' ),

        new IntegerField( {
            key: 'id',
            label: 'ID',
            type: 'integer',
            required: true,
            order: 1
        })
    ];
return fields;
   // return fields.sort(( a, b ) => a.order - b.order );
} 


}

