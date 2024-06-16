import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private autService:AuthService
  ) { }

  ngOnInit(): void {
  }

  logOut():void {
    this.autService.logout();
  }

}
