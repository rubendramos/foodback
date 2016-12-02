import { Component, OnInit, Input } from '@angular/core';
import { BasicForm } from './form/basic-form';
import { BasicComponent } from './elements-form/component/basic-component';
import { ComponentInterface } from './elements-form/component/component.interface';
@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
   
    @Input() page: BasicForm;
    components : ComponentInterface[];
constructor() {    
    
}

  ngOnInit() {
      this.components = this.page.getComponents();
  }

}
