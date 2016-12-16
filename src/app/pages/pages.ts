import {PagesInterface} from './pages.interface';
import {FormInterface} from '../formulario/form/form.interface';
import {ActionInterface} from '../formulario/elements-form/action/action.interface';
import {FormValidationInterface} from '../formulario/form/form-validation/form-validation.interface';

export class Pages implements PagesInterface {

private pageForm : FormInterface;
private pageActions : ActionInterface[];
private pageValidations : FormValidationInterface[];
private title : string;
    
    constructor(){}
    
    
    public getPageForm(): FormInterface {
        return this.pageForm;
    }
    
    public getPageActions() : ActionInterface[] {
            return this.pageActions
    };
    
    public getPageValidations() : FormValidationInterface[] {
        return this.pageValidations;
    };
    
    public getTitle() : string{
        return this.title;
    }
    
    
    public setTitle(title : string){
        this.title = title;
    }
    
    public setPageForm(pageForm : FormInterface){
        this.pageForm = pageForm;
    }
    
}
