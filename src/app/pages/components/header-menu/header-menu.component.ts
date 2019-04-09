import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  @Input() public userInfo: any;
  public dropdownShow = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  public toggle(): void {
    this.dropdownShow = !this.dropdownShow;
  }

  public logout(): void {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']));
  }
}
