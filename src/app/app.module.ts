import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MultiselectDropdownModule } from './multiselectDropdown/multiselect-dropdown';




import { TRANSLATION_PROVIDERS, TranslateService,TranslateModule }   from './translate';
import { TranslateComponent } from './translate/translate.component';
import { FormulariosModule } from './formulario/formularios.module';

import { PagesModule } from './pages/pages.module';
import { PagesService } from './pages/pages.service';
import { PagesInterface } from './pages/pages.interface';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HttpModule,ReactiveFormsModule,TranslateModule, PagesModule, FormulariosModule, MultiselectDropdownModule],
  providers: [TRANSLATION_PROVIDERS, TranslateService, PagesService ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
