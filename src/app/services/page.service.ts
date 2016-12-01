import { Injectable } from '@angular/core';
import { BasicPage } from '../formularios/fields/basic-page';
import { ComponentInterface } from '../formularios/fields/component.interface';

@Injectable()
export class PageService {

basicPage: BasicPage = new BasicPage('title', [],[]);
components : ComponentInterface[] = [];

    constructor(basicPage : BasicPage) {
        this.basicPage = basicPage;
    }

    getPage(): BasicPage {
        return new BasicPage('Novo',[],[]);
    }
    

}
