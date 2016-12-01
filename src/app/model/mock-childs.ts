import {Child} from './child';
import {Sexo} from './sexo';




export const CHILDS: Child[] = [
  {id: 1, name: 'Lois', birthday : '25/03/2014', sexo : new Sexo(1,'Neno')},
  {id: 2, name: 'Simon',birthday : '23/01/2010', sexo : new Sexo(2,'Nena')}
];