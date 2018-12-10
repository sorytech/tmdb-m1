import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { DialogData } from '../main-page.component';
import { TraitementFilmsService } from 'src/app/services/movies/traitement-films';
import { List } from 'src/app/tmdb-data/List';

@Component({
  selector: 'app-add-new-list',
  templateUrl: './add-new-list.component.html',
  styleUrls: ['./add-new-list.component.css']
})
export class AddNewListComponent implements OnInit {
  name: string;
  visibility = '';
  public ifNew: boolean;
  constructor(
    public dialogRef: MatDialogRef<AddNewListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public snackBar: MatSnackBar,private _filmTraitment: TraitementFilmsService) {}

  ngOnInit() {
    this.name = this.data.currentList !== undefined ? this.data.currentList.name : '';
    this.ifNew = this._filmTraitment.ifNew;
  }

  createNewList(nameList: string,visibility:string){
    if(nameList !== undefined && nameList.trim() !== '') {
      this._filmTraitment.addList(new List(this._filmTraitment.generateID(), nameList, visibility)); 
      this.dialogRef.close();            
    }else{
      this._filmTraitment.displayMessage("Erreur : Veuillez saisir le nom de la liste !", "Fermer");
      this.data.nameList='';
    }
  }

  saveEdit() {
    if (this.data.currentList.name.trim() ==='') {
      this._filmTraitment.displayMessage("Erreur : Veuillez saisir le nom de la liste !", "Fermer");
    } else {
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
