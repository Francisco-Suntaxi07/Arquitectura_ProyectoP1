import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    private _formBuilder: FormBuilder,
    private router: Router,
  ) { }
  signIn(user: string): void {
    this.router.navigate([user]);
    this.closeSignIn();
  }
  closeSignIn(): void {
    this.dialogRef.close();
  }
  public get formLogin(): FormGroup {
    return this.formLogin;
  }
}
