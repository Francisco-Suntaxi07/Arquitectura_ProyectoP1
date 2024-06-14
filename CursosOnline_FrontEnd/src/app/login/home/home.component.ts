import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; 
import { CreatorService } from 'src/app/service/creator.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  signInForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog,
    private creatorService: CreatorService,
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  login(): void {
    if (this.signInForm.valid) {
      this.userService.login(this.signInForm.value).subscribe({
        next: (response: any) => {
          const role = response.role;
          console.log('Rol:', role);
          if (role === 'ADMINISTRADOR') {
            this.router.navigate(['/admin']);
          } else if (role === 'CREADOR_C') {
            this.router.navigate(['/creator']);
          } else if (role === 'CONSUMIDOR_C') {
            this.router.navigate(['/consumer']);
          }
        },
        error: (err) => {
          this.snackBar.open('Login failed', 'Close', { duration: 2500 });
          console.error('Login failed', err);
        }
      });
    }
  }
  openSignIn(): void {
    const dialogRef = this.dialog.open(SignupComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.userService.findAll().subscribe(dataListUser => {
        console.log(dataListUser);
      });
      this.creatorService.findAll().subscribe(dataListCreator => {
        console.log(dataListCreator);
      });
    });
  }
}
