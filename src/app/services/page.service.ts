import { Injectable } from '@angular/core';
import { BasicForm } from '../formulario/form/basic-form';
import { ComponentInterface } from '../formulario/elements-form/component/component.interface';

@Injectable()
export class PageService {

basicPage: BasicForm = new BasicForm('title', [],[]);
components : ComponentInterface[] = [];

    constructor(basicPage : BasicForm) {
        this.basicPage = basicPage;
    }

    getPage(): BasicForm {
        return new BasicForm('Novo',[],[]);
    }
    

}
