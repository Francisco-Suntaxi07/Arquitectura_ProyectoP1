import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreatorModel } from 'src/app/model/creatorModel';
import { CreatorService } from 'src/app/service/creator.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  private _creatorDisabledList: CreatorModel[] = [];
  private _selectedCreatorDisabledList: CreatorModel[] = [];

  constructor(
    public dialogRef: MatDialogRef<AccountsComponent>,
    private creatorService: CreatorService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.loadCreatorAccount();
  }

  loadCreatorAccount(): void {
    this.creatorService.findDisable().subscribe({
      next: (response) => {
        this._creatorDisabledList = response;
      },
      error: (error) => {
        this.snackBar.open("⛔ Ocurrió un error al procesar las solicitudes", "Cerrar", {
          duration: 2500
        });
        console.log(error);
      }
    });
  }

  onSelectionChange(event: any): void {
    if (event.option.selected) {
      this._selectedCreatorDisabledList.push(event.option.value);
    } else {
      const index = this._selectedCreatorDisabledList.findIndex(item => item.id === event.option.value.id);
      if (index !== -1) {
        this._selectedCreatorDisabledList.splice(index, 1);
      }
    }

  }

  activateAccounts(): void {

    this._selectedCreatorDisabledList.forEach(creator => {
      creator.statusAccount = true;
      this.creatorService.save(creator).subscribe({
        error: (error) => {
          this.snackBar.open("⛔ Ocurrió un error al habilitadar las cuentas de creadores de contenido", "Cerrar", {
            duration: 2500
          });
          console.log(error);
        },
        complete: () => {
          this.snackBar.open("✅ Cuentas de creadores de contenido habilitadas correctamente", "Cerrar", {
            duration: 2500
          });
        }
      });
    });
    
    this.dialogRef.close();
  }

  public get creatorDisabledList(): CreatorModel[] {
    return this._creatorDisabledList;
  }

}
