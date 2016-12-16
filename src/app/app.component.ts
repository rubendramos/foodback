import { Component, OnInit } from '@angular/core';

import { PagesService } from './pages/pages.service';
import { PagesInterface } from './pages/pages.interface';
import { TranslateService }   from './translate';



@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    
})

export class AppComponent {
  
public page : PagesInterface;
public translatedText: string;
public supportedLanguages: any[];
public _translate : TranslateService;


    constructor(private pagesService : PagesService, private translate :TranslateService ) {

        this.page = pagesService.getPage();
        this._translate = translate;
        this.supportedLanguages = [
                                   { display: 'English', value: 'en' },
                                   { display: 'Español', value: 'es' },
                                   { display: '华语', value: 'zh' },
                                   { display: 'Galego', value: 'gl' },
                               ];
        
           // set language
           this._translate.setDefaultLang( 'gl' );
           this._translate.enableFallback( true );
           this._translate.use( 'es' );                               
    }
   
}