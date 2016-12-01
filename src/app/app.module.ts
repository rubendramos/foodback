import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormulariosModule } from './formularios/formularios.module';

import { AppComponent } from './app.component';
import { ChildDetailComponent } from './child-detail/child-detail.component';
import { ChildListComponent } from './child-list/child-list.component';

import { SexoService } from './services/sexo.service';


@NgModule({
  declarations: [
    AppComponent,
    ChildDetailComponent,
    ChildListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormulariosModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
