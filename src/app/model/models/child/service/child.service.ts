import { Injectable } from '@angular/core';
import { Child } from '../child';
import { CHILDS } from '../mock/mock-childs';
import { Inject } from '@angular/core';

@Injectable()
export class ChildService {
childs: Child[];

    constructor() {
        this.childs = CHILDS;    
        
    }

    getChild(): Child[] {
        return this.childs;
    }

   
}
