import { Component } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor(
    public dialog: MatDialog
  ) { }

  openSignIn(): void {
    const dialogRef = this.dialog.open(SignupComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
