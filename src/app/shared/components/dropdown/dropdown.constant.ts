import { Action } from './../../models/action.model';

export class Dropdown {
  show: boolean;
  title: string;
  items: Action[];
  avatar?: string | null;
}
