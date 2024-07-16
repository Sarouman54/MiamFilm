import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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
// [x: string]: any;
  loginForm: FormGroup;
  message: string | null = null;
  user: UserModel | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(response => {
        console.log(email, password);
          localStorage.setItem('token', response.token as string);
            this.router.navigate(['/']).then(() => {
              window.location.reload();
            });
      }, error => {
          alert('Login failed: ' + JSON.stringify(error.error)); // Affiche les détails de l'erreur
      });
    }
   }

   isLoggedIn(): boolean {
     return !!localStorage.getItem('token');
   }
}