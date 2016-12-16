import {SexoInterface} from '../sexo/sexo.interface';
import {AddressInterface} from '../address/address.interface';

export interface ChildInterface {
  id : number;
  name : string;
  surname : string;
  birthday : string;
  sexo : SexoInterface;
}