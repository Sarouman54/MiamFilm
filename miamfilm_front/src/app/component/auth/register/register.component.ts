import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  message: string | null = null;
  user: UserModel | null = null;
  id_role: number = 1;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      last_name: ['', Validators.required],
      first_name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const {last_name, first_name, username, email, password } = this.registerForm.value;
      const id_role = this.id_role;
      this.authService.register(last_name, first_name, username, email, password, id_role).subscribe(response => {
            this.router.navigate(['/']).then(() => {
              window.location.reload();
            });
      }, error => {
          alert('Register failed: ' + JSON.stringify(error.error)); // Affiche les détails de l'erreur
      });
    }
   }
}
