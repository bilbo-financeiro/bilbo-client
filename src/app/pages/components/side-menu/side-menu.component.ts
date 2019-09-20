import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import { PAGES_MENU } from './side-menu.constant';
import { PagesMenu, Menu } from './side-menu.models';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [
    trigger(
      'togglerAnimation', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('200ms', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          style({ opacity: 1 }),
          animate('200ms', style({ opacity: 0 }))
        ])
      ]
    )
  ],
})
export class SideMenuComponent implements OnInit {

  public pageMenulist: PagesMenu = PAGES_MENU;

  constructor() { }

  ngOnInit() { }

  public getPageMenuList(): Menu[] {
    return this.pageMenulist.showFavoriteList
      ? this.pageMenulist.favoriteList
      : this.pageMenulist.menuList;
  }

  public toggle(): void {
    this.pageMenulist.expanded = !this.pageMenulist.expanded;
  }

  public toogleFavorite(): void {
    this.pageMenulist.showFavoriteList = !this.pageMenulist.showFavoriteList;
  }



}
