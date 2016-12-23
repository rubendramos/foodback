import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule  }  from '@angular/forms';
import { HttpModule } from '@angular/http';


import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicGroupFormComponent } from './dynamic-group-form/dynamic-group-form.component';
import { FormulariosComponent } from './formularios.component';

import {MultiselectDropdownModule} from '../multiselectDropdown/multiselect-dropdown';
import { TranslateModule }   from '../translate';



@NgModule({
    declarations: [
      DynamicFormComponent,
      DynamicGroupFormComponent,FormulariosComponent],
      imports: [
      CommonModule,
      HttpModule,
      ReactiveFormsModule,
      TranslateModule,
      MultiselectDropdownModule,
      FormsModule ],
      exports: [FormulariosComponent],
      providers: [],
    
  })
export class FormulariosModule { }
