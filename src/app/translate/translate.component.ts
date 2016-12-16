import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from './services/translate.service';


@Component( {
    selector: 'app-translate',
    templateUrl: './translate.component.html',
    styleUrls: ['./translate.component.css'],
    providers: []
})
export class TranslateComponent implements OnInit {

    @Input()  public supportedLanguages: any[];
    @Input() public _translate : TranslateService;

    constructor() {
    }
    ngOnInit() {        
    }


    isCurrentLang( lang: string ) {
        return lang === this._translate.currentLang;
    }

    selectLang( lang: string ) {
        this._translate.use( lang );
    }

}