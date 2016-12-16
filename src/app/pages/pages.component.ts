import { Component, OnInit } from '@angular/core';


import { SexoComponentService }   from './component/sexo/sexoComponent.service';
import { ChildComponentService }   from './component/child/childComponent.service';
import { ModelService }   from '../model/model.service';


@Component( {
    selector: 'pages-component',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.css']
})

export class PagesComponent {

    constructor() {
    }
   
}