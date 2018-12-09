import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from '../main-page/main-page.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-edit-list',
  templateUrl: './dialog-edit-list.component.html',
  styleUrls: ['./dialog-edit-list.component.css']
})
export class DialogEditListComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogEditListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}
