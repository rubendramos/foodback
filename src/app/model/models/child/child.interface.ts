import {Sexo} from './sexo.interface';
import {Address} from './address.interface';

export interface Child {
  id : number;
  name : string;
  surname : string;
  birthday : string;
  sex : Sexo;
  address : Address;
}