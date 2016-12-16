import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { TranslateService }   from './services/translate.service';
import { TranslatePipe }   from './pipes/translate.pipe';
import { TRANSLATION_PROVIDERS }   from './translations';
import { TranslateComponent } from './translate.component';


@NgModule({
  declarations: [TranslatePipe, TranslateComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [TranslatePipe,TranslateComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TranslateModule { }
