import { Injectable } from '@angular/core';

import { ComponentInterface } from '../formulario/elements-form/component/component.interface';
import { BasicForm } from '../formulario/form/basic-form';
import { PagesInterface } from './pages.interface';
import { Pages } from './pages';
import { ChildComponentService} from './component/child/childComponent.service';
import { SexoComponentService} from './component/sexo/sexoComponent.service';


@Injectable()
export class PagesService {

    private pages : Pages;
    constructor(private childComponentService : ChildComponentService, private sexoComponentService :SexoComponentService) {
    };

    public getPage(): PagesInterface {
        this.pages = new Pages();
        let basicForm = new BasicForm( 'page proof1', [], [], [] );
        basicForm.addComponent( this.childComponentService.getComponent() );
        basicForm.addComponent( this.sexoComponentService.getComponent() );
        this.pages.setPageForm(basicForm);  
        this.pages.setTitle('page proof1');
        return this.pages;
    }
    

}
