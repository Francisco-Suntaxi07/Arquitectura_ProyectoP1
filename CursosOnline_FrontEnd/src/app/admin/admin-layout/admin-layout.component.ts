import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountsComponent } from '../accounts/accounts.component';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { CreatorService } from 'src/app/service/creator.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent  {

  constructor(
    public dialog: MatDialog,

  ) {}

  openAcounts(): void {
    const dialogRef = this.dialog.open(AccountsComponent);
  }

}
