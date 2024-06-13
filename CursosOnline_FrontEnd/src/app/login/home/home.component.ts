import { Component } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
import { CreatorService } from 'src/app/service/creator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private creatorService: CreatorService,
    private router: Router,
  ) { }

  loadSession(): void {
    this.router.navigate(['/admin']);
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
