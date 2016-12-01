import { Component, OnInit, Input } from '@angular/core';
import { Child } from '../model/child';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.component.html',
  styleUrls: ['./child-detail.component.css']
})
export class ChildDetailComponent implements OnInit {

  constructor() { }

  @Input()
  child : Child;
  
  ngOnInit() {
  }

}
