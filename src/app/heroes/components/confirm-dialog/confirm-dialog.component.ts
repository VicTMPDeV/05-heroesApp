import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: [`
    .action-buttons{
      margin-top: 20px;
    }
  `]
})
export class ConfirmDialogComponent implements OnInit {

  constructor( private _dialogRef: MatDialogRef<ConfirmDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Hero ) { }

  ngOnInit(): void {}

  public delete(){
    this._dialogRef.close(true);
  }

  public close(){
    this._dialogRef.close();
  }

}
