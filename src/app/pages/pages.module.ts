import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { PagesService } from './pages.service';
import { ModelModule } from '../model/model.module';
import { FormulariosModule } from '../formulario/formularios.module';
import { SexoComponentService} from './component/sexo/sexoComponent.service';
import { ChildComponentService } from './component/child/childComponent.service';
import { PagesComponent } from './pages.component';
import { ModelService} from '../model/model.service';


import { LocationStrategy,
    HashLocationStrategy }         from '@angular/common';


@NgModule({
  declarations: [PagesComponent],
  imports: [ModelModule,FormulariosModule],
          providers: [SexoComponentService,ChildComponentService, ModelService]          
})
  
export class PagesModule {}
