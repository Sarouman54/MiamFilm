import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { UserModel } from '../../../models/user.model';
import { Router } from '@angular/router';

interface AuthResponse {
  success: boolean;
  token?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
[x: string]: any;
  loginForm: FormGroup;
  message: string | null = null;
  user: UserModel | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (response: AuthResponse) => {
          if (response.success) {
            localStorage.setItem('token', response.token as string);
            this.router.navigate(['/']).then(() => {
              window.location.reload();
            });
          } else {
            this.message = 'Connexion échouée';
          }
        },
        error => {
          this.message = error.error.message;
        }
      );
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}