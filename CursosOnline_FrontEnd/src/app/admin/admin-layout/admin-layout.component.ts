import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  userData: { id: string, nombre: string, apellido: string, rol: string } | null = null;

  constructor(
    public dialog: MatDialog,
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
