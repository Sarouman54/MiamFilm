import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { TagService } from '../../services/tag.service';
import { jwtDecode } from 'jwt-decode';
import { TagModel } from '../../models/tag.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isTokenValid = false;
  tagList: TagModel[] = [];

  constructor(
    private authService: AuthService, 
    private usersService: UsersService,
    private tagService: TagService,
  ) {
    this.isTokenValid = this.authService.isTokenValid();
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    this.tagService.getAllTag().subscribe((response: TagModel[]) => {
      this.tagList = response
    },
    error => {
      console.error('Erreur lors de la récupération des tags :', error);
    })
  }

  onSignOut() {
    this.authService.logout();
    window.location.reload();  
  }
}
