import { Component, OnInit } from '@angular/core';
import { Dropdown } from './shared/components/dropdown/dropdown.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public brand = 'https://boygeniusreport.files.wordpress.com/2018/06/screen-shot-2018-06-08-at-11-28-42-am.png?w=782';
  public dropdown: any;

  ngOnInit(): void {
    const actions = [
      {
        title: 'Meu Perfil',
        icon: 'icon',
        action: () => { }
      },
      {
        title: 'Meu Perfil',
        icon: 'icon',
        action: () => { }
      },
      {
        title: 'Meu Perfil',
        icon: 'icon',
        action: () => { }
      },
      {
        title: 'Meu Perfil',
        icon: 'icon',
        action: () => { }
      }
    ];
    const avatar = 'https://boygeniusreport.files.wordpress.com/2018/06/screen-shot-2018-06-08-at-11-28-42-am.png?w=782';
    this.dropdown = new Dropdown(false, 'Felipe Francischetto', actions, avatar);
    this.dropdown.toggle();
  }
}
