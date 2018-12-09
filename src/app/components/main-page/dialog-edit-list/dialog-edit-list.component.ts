import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../main-page.component';

@Component({
  selector: 'app-dialog-edit-list',
  templateUrl: './dialog-edit-list.component.html',
  styleUrls: ['./dialog-edit-list.component.css']
})
export class DialogEditListComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogEditListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {

    this.dialogRef.close();
  }
  ngOnInit() {
  }



}
