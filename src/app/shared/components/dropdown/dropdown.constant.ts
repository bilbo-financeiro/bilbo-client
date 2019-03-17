import { Action } from './../../models/action.model';

export class Dropdown {
  show: boolean;
  title: string;
  items: Action[];
  avatar?: string | null;

  constructor(show: boolean = false, title: string, items: Action[], avatar?: string) {
    this.show = show;
    this.title = title;
    this.items = items;
    this.avatar = avatar;
  }

  public toggle() {
    this.show = !this.show;
  }
}
