import { Component, OnInit } from '@angular/core';

import { slideInAnimation } from './../shared/animations/transition';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [slideInAnimation]
})
export class PagesComponent implements OnInit {

  public brand = 'https://boygeniusreport.files.wordpress.com/2018/06/screen-shot-2018-06-08-at-11-28-42-am.png?w=782';
  public userInfo = {
    UID: 30030,
    fullName: 'Felipe Francischetto',
    avatar: 'assets/icons/avatar.png'
  };

  constructor() { }

  ngOnInit() { }

  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
