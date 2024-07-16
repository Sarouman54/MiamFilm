import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isTokenValid = false;

  constructor(
    private authService: AuthService, 
    private usersService: UsersService, 
  ) {
    this.isTokenValid = this.authService.isTokenValid();
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
  }

  onSignOut() {
    this.authService.logout();
    window.location.reload();  
  }
}
