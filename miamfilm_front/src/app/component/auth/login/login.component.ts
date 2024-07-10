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
    console.log("ici 1")
    if (this.loginForm.valid) {
      console.log("ici 2")
      const { email, password } = this.loginForm.value;
      console.log("ici 3 "+ email, password)
      this.authService.login(email, password).subscribe(
        (response: AuthResponse) => {
          if (response.success) {
            console.log("ici 4 "+ response.success)
            localStorage.setItem('token', response.token as string);
            console.log("ici 5 "+ localStorage.getItem)
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