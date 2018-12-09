import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { DialogData } from '../main-page.component';

@Component({
  selector: 'app-add-new-list',
  templateUrl: './add-new-list.component.html',
  styleUrls: ['./add-new-list.component.css']
})
export class AddNewListComponent implements OnInit {
  name: string;
  visibility = '';
  constructor(
    public dialogRef: MatDialogRef<AddNewListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.name = this.data.currentList !== undefined ? this.data.currentList.name : '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveEdit() {
    console.log('visibility : ', this.visibility)
    if (this.data.currentList.name === '') {
      this.snackBar.open('Erreur : Veuillez saisir le nom de la liste !', 'Fermer', {
        duration: 8000,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
    } else {

      if(this.visibility !== '') {
          this.data.currentList.setVisibility(this.visibility);
          const message = `Votre liste a été rendue ${this.visibility} !`;
      }
      this.dialogRef.close();
    }
  }

  cancelEdit() {
    this.data.currentList.setName(this.name);
    this.dialogRef.close();
    if (this.data.currentList.name === '') {
        
    }
  }



}
