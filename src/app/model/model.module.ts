import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ModelComponent } from './model.component';
import { ChildService} from './models/child/service/child.service'
import { SexoService} from './models/sexo/service/sexo.service'


@NgModule({
  declarations: [ModelComponent],
  imports: [],
  providers: [ChildService,SexoService],
  exports:[ModelComponent]
})
export class ModelModule { }
