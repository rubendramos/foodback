import { Injectable } from '@angular/core';
import { Child } from '../model/child';
import { CHILDS } from '../model/mock-childs';
import { ChildForm } from '../model/childForm';
import { Inject } from '@angular/core';


import { DropdownField } from '../formularios/fields/dropdown-field';
import { BasicField } from '../formularios/fields/basic-field';
import { TextboxField } from '../formularios/fields/textbox-field';
import { DateField } from '../formularios/fields/Date-field';
import { IntegerField } from '../formularios/fields/integer-field';

import { ComponentInterface } from '../formularios/fields/component.interface';
import { ElementInterface } from '../formularios/fields/element.interface';
import { ActionInterface } from '../formularios/fields/action.interface';
import { BasicAction } from '../formularios/fields/basic-action';
import { SexoService } from './sexo.service';
import {BasicComponent} from '../formularios/fields/basic-component';
import {FactoryValidation} from '../formularios/fields/validations/factory-validation';
@Injectable()
export class ChildService {


childs: Child[];
elements : ElementInterface[] = [];
fkElements : ElementInterface[] ;
actions : ActionInterface[] = [];
component : ComponentInterface;
fkSexo : ElementInterface;

    constructor(sexoService : SexoService) {
        this.childs = CHILDS;    
        this.fkSexo = sexoService.getFkElement();
    }

    getChild(): Child[] {
        return this.childs;
    }

    getChildForm(): ChildForm{
        return new ChildForm();
    }
    
    getElements(): ElementInterface[] {
       this.elements = [
                               new TextboxField( {
                                   key: 'name',
                                   label: 'Nome',
                                   value: '',
                                   validations: [FactoryValidation.getRequiredValidation(),FactoryValidation.getMinLengthValidation(2)],
                                   order: 2
                               }),
                               new TextboxField( {
                                   key: 'surname',
                                   label: 'Apelido',
                                   value: '',
                                   validations: [FactoryValidation.getRequiredValidation(),FactoryValidation.getMaxLengthValidation(5)],
                                   order: 3
                               }),
                               new DateField( {
                                   key: 'birthday',
                                   label: 'Data Nemento',
                                   type: 'date',
                                   validations: [FactoryValidation.getRequiredValidation(),FactoryValidation.getMaxLengthValidation(10),FactoryValidation.getMinLengthValidation(10)],
                                   order: 4
                               }, 'fullDate' ),

                               new IntegerField( {
                                   key: 'id',
                                   label: 'ID',
                                   type: 'integer',
                                   validations: [FactoryValidation.getRequiredValidation()],
                                   order: 1
                               }), this.fkSexo
                           ];
       return this.elements.sort(( a, b ) => a.order - b.order )
       
    }

    getFkComponent(): ElementInterface[] {
        return this.fkElements;
    } 
    
    getActions() : ActionInterface[]{
            this.actions = [new BasicAction({key:'save', label:'gardar', order:3, controlType:'componente'}),
                            new BasicAction({key:'delete', label:'borrar', order:2, controlType:'componente'}),
                            new BasicAction({key:'edit', label:'editar', order:1, controlType:'componente'})]
            return this.actions.sort(( a, b ) => a.order - b.order )
    }
    
    getComponent() : ComponentInterface{
        let childComponent = new BasicComponent("Childs",1);
        childComponent.setElements(this.getElements());
        childComponent.setActions(this.getActions());
        return this.component = childComponent;
    }
   
}
