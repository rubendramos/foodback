import { Injectable } from '@angular/core';
import { Option } from './option';

import {FormInterface} from '../../../formulario/form/form.interface';
import {FieldInterface} from '../../../formulario/elements-form/field/field.interface';
import {BasicField} from '../../../formulario/elements-form/field/basic-field';
import {BasicForm} from '../../../formulario/form/basic-form';


import { DropdownField } from '../../../formulario/elements-form/field/dropdown-field';
import { TextboxField } from '../../../formulario/elements-form/field/textbox-field';
import { DateField } from '../../../formulario/elements-form/field/Date-field';
import { IntegerField } from '../../../formulario/elements-form/field/integer-field';

import { ComponentInterface } from '../../../formulario/elements-form/component/component.interface';
import { ActionInterface } from '../../../formulario/elements-form/action/action.interface';
import { BasicAction } from '../../../formulario/elements-form/action/basic-action';
import {BasicComponent} from '../../../formulario/elements-form/component/basic-component';
import {FactoryFieldValidation} from '../../../formulario/elements-form/field/field-validation/factory-field-validation';

import { ModelService} from '../../../model/model.service';
import { SexoInterface} from '../../../model/models/sexo/sexo.interface';

@Injectable()
export class SexoComponentService {

fkElement: FieldInterface;
elements: FieldInterface[];
actions : ActionInterface[];  
component : ComponentInterface;
sexos : SexoInterface[];

constructor (private modelService : ModelService){
    this.sexos = this.modelService.getSexos();
    
}

  getOptions() : Option[] {
         let options : Option[] = [];        
         for (let sexo of this.sexos){
             options.push(new Option(sexo.id,sexo.name));
         }
         return options;
  }

getElements(): FieldInterface[] {
    this.elements = [new TextboxField( {
                            key: 'name',
                            label: 'name',
                            value: '',
                            validations: [FactoryFieldValidation.getRequiredValidation()],
                            order: 2
                            }),
                            new IntegerField( {
                            key: 'id',
                            label: 'ID',
                            type: 'integer',
                            validations: [FactoryFieldValidation.getRequiredValidation()],
                            required: true,
                            maxLength : 5,
                            order: 1
                            })
                            ];
     
        return this.elements.sort(( a, b ) => a.order - b.order )
    }

getFkElement(): FieldInterface {
    return this.fkElement =  new DropdownField({
    key: 'Sex',
    label: 'Sexo',
    options: this.getOptions(),
    required: true,
    order : 4
  }); ;
}

getActions() : ActionInterface[]{
        this.actions = [new BasicAction({key:'save', label:'save', order:3, controlType:'componente'}),
                        new BasicAction({key:'delete', label:'delete', order:2, controlType:'componente'}),
                        new BasicAction({key:'edit', label:'edit', order:1, controlType:'componente'})]
        return this.actions.sort(( a, b ) => a.order - b.order )
    }


getComponent() : ComponentInterface{
    let sexoComponent = new BasicComponent("sex component",1);
    sexoComponent.setElements(this.getElements());
    sexoComponent.setActions(this.getActions());
    return this.component = sexoComponent;
}
  
}
