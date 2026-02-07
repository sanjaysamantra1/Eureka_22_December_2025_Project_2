import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Login } from '../login/login';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { TABLE_DATA } from './table_data';

@Component({
  selector: 'app-material-demo',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule
  ],
  templateUrl: './material-demo.html',
  styleUrl: './material-demo.css',
})
export class MaterialDemo {
  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(Login, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openSnackBar() {
    this._snackBar.open('Hello World', 'X');
  }


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = TABLE_DATA;
}
