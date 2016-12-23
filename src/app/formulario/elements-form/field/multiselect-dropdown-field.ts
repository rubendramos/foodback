import { BasicField } from './basic-field';
import {FieldInterface} from './field.interface';
import {FieldValidationInterface} from './field-validation/field-validation.interface';
import {FactoryFieldValidation} from './field-validation/factory-field-validation';
import {IMultiSelectSettings,IMultiSelectTexts} from '../../../multiselectDropdown/multiselect-dropdown';

export class MultiSelectDropdownField extends BasicField<number[]>  implements FieldInterface {
  controlType = 'multiselect-dropdown';
  options: {key: string, value: string}[] = [];
  numSelected: number ;
  selectedOptions : number[] ;
  
  settings: IMultiSelectSettings = {
          pullRight: false,
          enableSearch: true,
          checkedStyle: 'glyphicon',
          buttonClasses: 'btn btn-default',
          selectionLimit: 0,
          closeOnSelect: false,
          showCheckAll: true,
          showUncheckAll: true,
          dynamicTitleMaxItems: 3,
          maxHeight: '300px',
      };

    texts: IMultiSelectTexts = {
            checkAll: 'Selecciona todos',
            uncheckAll: 'Deselecciona todos',
            checked: 'Seleccionado',
            checkedPlural: 'Seleccionados',
            searchPlaceholder: 'Buscar...',
            defaultTitle: 'Selecciona',
            
      };
  
  
  
  

  constructor(options: {} = {}) {
    super(options);
    this.value = [];
    this.options = options['options'] || []; 
    this.numSelected = 0;
  }
  
  getSettings() : IMultiSelectSettings{
      return this.settings;
  }
  
  setSettings(settings : IMultiSelectSettings){
      this.settings = settings;
  }
  
  getTexts() : IMultiSelectTexts{
      return this.texts;
  }
  
  setTexts(tests : IMultiSelectTexts){
      this.texts = tests;
  }  
}
