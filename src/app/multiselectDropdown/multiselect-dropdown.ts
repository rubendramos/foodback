/*
 * Angular 2 Dropdown Multiselect for Bootstrap
 *
 * Simon Lindh
 * https://github.com/softsimon/angular-2-dropdown-multiselect
 */

import {
    NgModule,
    Component,
    Pipe,
    OnInit,
    DoCheck,
    HostListener,
    Input,
    ElementRef,
    Output,
    EventEmitter,
    forwardRef,
    IterableDiffers,
    CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import {CommonModule } from '@angular/common';
import {FormsModule,NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

const MULTISELECT_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiselectDropdown),
    multi: true
};

export interface IMultiSelectOption {
    key: any;
    value: string;
}

export interface IMultiSelectSettings {
    pullRight?: boolean;
    enableSearch?: boolean;
    checkedStyle?: 'checkboxes' | 'glyphicon';
    buttonClasses?: string;
    selectionLimit?: number;
    closeOnSelect?: boolean;
    autoUnselect?: boolean;
    showCheckAll?: boolean;
    showUncheckAll?: boolean;
    dynamicTitleMaxItems?: number;
    maxHeight?: string;
}

export interface IMultiSelectTexts {
    checkAll?: string;
    uncheckAll?: string;
    checked?: string;
    checkedPlural?: string;
    searchPlaceholder?: string;
    defaultTitle?: string;
    label?: string;
}

@Pipe({
    name: 'searchFilter'
})
export class MultiSelectSearchFilter {
    transform(options: Array<IMultiSelectOption>, args: string): Array<IMultiSelectOption> {
        return options.filter((option: IMultiSelectOption) => option.value.toLowerCase().indexOf((args || '').toLowerCase()) > -1);
    }
}

@Component({
    selector: 'ss-multiselect-dropdown',
    providers: [MULTISELECT_VALUE_ACCESSOR],
    styles: [`
	a { outline: none !important; }
	
	.btn-group-multiselect {
	position: relative;
    display: inline-block;
    
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px
    }
	
    .ng-button-invalid  {
    border-left: 4px solid #a94442;
    border-radius: 4px; 
    }

    .ng-button-valid  {
    border-left: 4px solid #42A948; /* green */
    border-radius: 4px; 
    }             
	`],
    template: `
        <div   class="btn-group-multiselect">
            <button type="button" class="dropdown-toggle" [ngClass]="this.numSelected !== 0?'ng-button-valid':'ng-button-invalid'"
            (click)="toggleDropdown()">{{ title }}&nbsp;<span class="caret"></span></button>
            <ul *ngIf="isVisible" class="dropdown-menu" [class.pull-right]="settings.pullRight" 
            [style.max-height]="settings.maxHeight" style="display: block; height: auto; overflow-y: auto;">
                <li class="dropdown-item" style="margin: 0px 5px 5px 5px;" *ngIf="settings.enableSearch">
                    <div class="input-group input-group-sm">
                        <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-search"></i></span>
                       
                        <input type="text" class="form-control" [(ngModel)]="searchFilterText"  placeholder="{{ texts.searchPlaceholder }}"
                        aria-describedby="sizing-addon3" >
                        <span class="input-group-btn" *ngIf="searchFilterText.length > 0">
                            <button class="btn btn-default" type="button" (click)="clearSearch()"><i class="fa fa-times"></i></button>
                        </span>
                    </div>
                </li>
                <li class="dropdown-divider divider" *ngIf="settings.enableSearch"></li>
                <li class="dropdown-item" *ngIf="settings.showCheckAll">
                    <a href="javascript:;"  role="menuitem" tabindex="-1" (click)="checkAll()">
                        <span style="width: 16px;" class="glyphicon glyphicon-ok"></span>
                        {{ texts.checkAll }}
                    </a>
                </li>
                <li class="dropdown-item" *ngIf="settings.showUncheckAll">
                    <a href="javascript:;" role="menuitem" tabindex="-1" (click)="uncheckAll()">
                        <span style="width: 16px;" class="glyphicon glyphicon-remove"></span>
                        {{ texts.uncheckAll }}
                    </a>
                </li>
                <li *ngIf="settings.showCheckAll || settings.showUncheckAll" class="dropdown-divider divider"></li>
                <li class="dropdown-item" *ngFor="let option of options | searchFilter:searchFilterText">
                    <a href="javascript:;" role="menuitem" tabindex="-1"  (click)="setSelected($event, option)">
                        <input  *ngIf="settings.checkedStyle == 'checkboxes'" type="checkbox"     [checked]="isSelected(option)" />
                        <span *ngIf="settings.checkedStyle == 'glyphicon'" style="width: 16px;" 
                        class="glyphicon" [class.glyphicon-ok]="isSelected(option)"></span>
                        {{ option.value }}
                    </a>
                </li>
            </ul>                   
        </div>
    `
})
export class MultiselectDropdown implements OnInit, DoCheck, ControlValueAccessor {

    @Input() options: Array<IMultiSelectOption>;
    @Input() settings: IMultiSelectSettings;
    @Input() texts: IMultiSelectTexts;
    @Output() selectionLimitReached = new EventEmitter();
    @Output() dropdownClosed = new EventEmitter();

    @HostListener('document: click', ['$event.target'])
    onClick(target: HTMLElement) {
        let parentFound = false;
        while (target != null && !parentFound) {
            if (target === this.element.nativeElement) {
                parentFound = true;
            }
            target = target.parentElement;
        }
        if (!parentFound) {
            this.isVisible = false;
        }
    }

    onModelChange: Function = (_: any) => {
    };
    onModelTouched: Function = () => {
    };
    
    getNumSelected: Function = () => {
    };    
    model: number[];
    title: string;
    @Input() label : string;
    differ: any;
    numSelected: number = 0;
    isVisible: boolean = false;
    searchFilterText: string = '';
    defaultSettings: IMultiSelectSettings = {
        pullRight: false,
        enableSearch: true,
        checkedStyle: 'checkboxes',
        buttonClasses: 'btn-group-multiselect ng-button-invalid',
        selectionLimit: 0,
        closeOnSelect: false,
        autoUnselect: false,
        showCheckAll: false,
        showUncheckAll: false,
        dynamicTitleMaxItems: 3,
        maxHeight: '300px',
    };
    defaultTexts: IMultiSelectTexts = {
        checkAll: 'Selecciona todos',
        uncheckAll: 'Deselecciona todos',
        checked: 'Seleccionado',
        checkedPlural: 'Seleccionados',
        searchPlaceholder: 'Buscar...',
        defaultTitle: 'Selecciona unha opción',
    };

    constructor(private element: ElementRef,
                private differs: IterableDiffers) {
        this.differ = differs.find([]).create(null);
    }

    ngOnInit() {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        this.texts = Object.assign(this.defaultTexts, this.texts);
        this.title = this.texts.defaultTitle + " " + this.label;
        
    }

    writeValue(value: any): void {
        if (value !== undefined) {
            this.model = value;
        }
    }

    registerOnChange(fn: Function): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }
    
    registerNumSelected(fn: Function) : number{
        return this.numSelected;
    }    

    ngDoCheck() {
        
        let changes = this.differ.diff(this.model);
        if (changes) {
            this.updateNumSelected();
            this.updateTitle();
        }
    }

    clearSearch() {
        this.searchFilterText = '';
    }

    toggleDropdown() {
        this.isVisible = !this.isVisible;
        if (!this.isVisible) {
            this.dropdownClosed.emit();
        }
    }

    isSelected(option: IMultiSelectOption): boolean {
        return this.model && this.model.indexOf(option.key) > -1;
    }

    setSelected(event: Event, option: IMultiSelectOption) {
        if (!this.model) {
            this.model = [];
        }
        var index = this.model.indexOf(option.key);
        if (index > -1) {
            this.model.splice(index, 1);
        } else {
            if (this.settings.selectionLimit === 0 || this.model.length < this.settings.selectionLimit) {
                this.model.push(option.key);
            } else {
                if (this.settings.autoUnselect) {
                    this.model.push(option.key);
                    this.model.shift();
                } else {
                    this.selectionLimitReached.emit(this.model.length);
                    return;
                }
            }
        }
        if (this.settings.closeOnSelect) {
            this.toggleDropdown();
        }
        this.onModelChange(this.model);
    }

    updateNumSelected() {
        this.numSelected = this.model && this.model.length || 0;
    }

    updateTitle() {
        if (this.numSelected === 0) {
            this.title = this.texts.defaultTitle + " " + this.label ;
        } else if (this.settings.dynamicTitleMaxItems >= this.numSelected) {
            this.title = this.options
                .filter((option: IMultiSelectOption) => this.model && this.model.indexOf(option.key) > -1)
                .map((option: IMultiSelectOption) => option.value)
                .join(', ');
        } else {
            this.title = this.numSelected + ' ' + (this.numSelected === 1 ? this.texts.checked : this.texts.checkedPlural);
        }
    }

    checkAll() {
        this.model = this.options.map(option => option.key);
        this.onModelChange(this.model);
    }

    uncheckAll() {
        this.model = [];
        this.onModelChange(this.model);
    }
    

}

@NgModule({
    imports: [CommonModule,FormsModule],
    exports: [MultiselectDropdown],
    declarations: [MultiselectDropdown, MultiSelectSearchFilter],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MultiselectDropdownModule {
}
