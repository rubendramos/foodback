import {SexoInterface} from './sexo.interface';
export class Sexo implements SexoInterface {
  id : number;
  name : string;

constructor(id?:number, name?: string){
    this.id = id;
    this.name = name;
} 

}
