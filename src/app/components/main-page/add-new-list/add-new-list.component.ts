import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../main-page.component';

@Component({
  selector: 'app-add-new-list',
  templateUrl: './add-new-list.component.html',
  styleUrls: ['./add-new-list.component.css']
})
export class AddNewListComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddNewListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }



}
