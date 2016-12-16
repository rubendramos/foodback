import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';



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

import {SexoComponentService} from '../sexo/sexoComponent.service';

@Injectable()
export class ChildComponentService {


elements : FieldInterface[] = [];
fkElements : FieldInterface[] ;
actions : ActionInterface[] = [];
component : ComponentInterface;
fkSexo : FieldInterface;


    constructor(private sexoComponentService : SexoComponentService) {   
        this.fkSexo = this.sexoComponentService.getFkElement();
    }


    getElements(): FieldInterface[] {
       this.elements = [
                               new TextboxField( {
                                   key: 'name',
                                   label: 'name',
                                   value: '',
                                   validations: [FactoryFieldValidation.getRequiredValidation()],                                   
                                   order: 2
                               }),
                               new TextboxField( {
                                   key: 'surname',
                                   label: 'surname',
                                   value: '',
                                   validations: [FactoryFieldValidation.getRequiredValidation()],
                                   order: 3
                               }),
                               new DateField( {
                                   key: 'birthday',
                                   label: 'birthday',
                                   type: 'date',
                                   validations: [FactoryFieldValidation.getRequiredValidation()],
                                   order: 4
                               }, 'fullDate' ),

                               new IntegerField( {
                                   key: 'id',
                                   label: 'ID',
                                   type: 'integer',
                                   validations: [FactoryFieldValidation.getRequiredValidation()],
                                   order: 1
                               }), this.fkSexo
                           ];
       return this.elements.sort(( a, b ) => a.order - b.order )
       
    }

    getFkComponent(): FieldInterface[] {
        return this.fkElements;
    } 
    
    getActions() : ActionInterface[]{
            this.actions = [new BasicAction({key:'save', label:'save', order:3, controlType:'componente'}),
                            new BasicAction({key:'delete', label:'delete', order:2, controlType:'componente'}),
                            new BasicAction({key:'edit', label:'edit', order:1, controlType:'componente'})]
            return this.actions.sort(( a, b ) => a.order - b.order )
    }
    
    getComponent() : ComponentInterface{
        let childComponent = new BasicComponent("child component",1);
        childComponent.setElements(this.getElements());
        childComponent.setActions(this.getActions());
        return this.component = childComponent;
    }
   
}
