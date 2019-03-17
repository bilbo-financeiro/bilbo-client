import { Component, OnInit, Input } from '@angular/core';
import { Dropdown } from './dropdown.constant';
import { Action } from './../../models/action.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public dropdown: Dropdown;

  @Input() actions: Action[];

  constructor() { }

  ngOnInit() {
    // this.dropdown = new Dropdown(false, 'Felipe Francischetto, ')
  }

}
