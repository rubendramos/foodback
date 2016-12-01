import { Component, OnInit } from '@angular/core';
import { ChildService } from '../services/child.service';
import { Child } from '../model/child';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css'],
  providers: [ChildService]
})
export class ChildListComponent implements OnInit {

  private childs : Child[];
  private selectedChild : Child;
  
  constructor(private childService : ChildService) { }

  ngOnInit() {
    this.getChilds();
  }
  
  getChilds() : void {
   this.childs = this.childService.getChild();
  }
    
  onClick(child : Child) {
      this.selectedChild = child;
  }  

}
