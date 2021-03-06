import { Component, Input } from '@angular/core';
import { User } from 'src/app/reducers/auth/auth.reducer';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() user: User | null = null;
  @Input() isLoggedIn: boolean = false;

  constructor(private homeService: HomeService) {}

  logout(): void {
    this.homeService.logout();
  }
}
