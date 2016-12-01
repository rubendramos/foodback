import { Component } from '@angular/core';
import { ChildService } from './services/child.service';
import { SexoService } from './services/sexo.service';
import { PageService } from './services/page.service';
import { BasicPage } from './formularios/fields/basic-page';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [ChildService, SexoService, PageService]
})

export class AppComponent {
  page : BasicPage = new BasicPage('Proba1',[],[]);
  constructor(childService: ChildService, sexoService : SexoService) {
  
  this.page.addComponent(childService.getComponent());  
  this.page.addComponent(sexoService.getComponent()); 
  }
}