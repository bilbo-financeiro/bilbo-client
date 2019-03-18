import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public brand = 'https://boygeniusreport.files.wordpress.com/2018/06/screen-shot-2018-06-08-at-11-28-42-am.png?w=782';
  public userInfo = {
    fullName: 'Felipe Francischetto',
    avatar: 'assets/avatar.png'
  };

  ngOnInit(): void {
  }

}
