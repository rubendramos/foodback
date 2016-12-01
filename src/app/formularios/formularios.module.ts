import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';


import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicGroupFormComponent } from './dynamic-group-form/dynamic-group-form.component';
import { FormulariosComponent } from './formularios.component';




@NgModule({
    declarations: [
      DynamicFormComponent,
      DynamicGroupFormComponent,FormulariosComponent],
    imports: [
      CommonModule,
      HttpModule,
      ReactiveFormsModule],
      exports: [FormulariosComponent],
    providers: [],
    
  })
export class FormulariosModule { }
