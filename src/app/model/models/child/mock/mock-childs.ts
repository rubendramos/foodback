import {ChildInterface} from '../child.interface';
import {Sexo} from '../../sexo/sexo';




export const CHILDS: ChildInterface[] = [
  {id: 1, name: 'Lois', surname:'díaz', birthday : '25/03/2014', sexo : new Sexo(1,'Neno')},
  {id: 2, name: 'Simon',surname:'díaz',birthday : '23/01/2010', sexo : new Sexo(2,'Nena')}
];