import { Component, OnInit, Input } from '@angular/core';
import { BasicPage } from './fields/basic-page';
import { BasicComponent } from './fields/basic-component';
import { ComponentInterface } from './fields/component.interface';
@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
   
    @Input() page: BasicPage;
    components : ComponentInterface[];
constructor() {    
    
}

  ngOnInit() {
      this.components = this.page.getComponents();
  }

}
