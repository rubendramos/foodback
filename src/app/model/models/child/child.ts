import {SexoInterface} from '../sexo/sexo.interface';
import {ChildInterface} from './child.interface'

export class Child implements ChildInterface {
  id : number;
  name : string;
  surname : string;
  birthday : string;
  sexo : SexoInterface;
}
