import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  @Input() public userInfo: any;
  public dropdownShow = false;

  constructor() { }

  ngOnInit() {
  }

  public toggle(): void {
    this.dropdownShow = !this.dropdownShow;
  }

  public logout(): void {
    console.log('tem certeza que deseja sair ?');
  }
}
