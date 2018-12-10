import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogData } from '../main-page/main-page.component';
import { TraitementFilmsService } from 'src/app/services/movies/traitement-films';
import { List } from 'src/app/tmdb-data/List';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-remove-list',
  templateUrl: './remove-list.component.html',
  styleUrls: ['./remove-list.component.css']
})
export class RemoveListComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public dialog: MatDialog,
    private _filmTraitment: TraitementFilmsService,private router: Router) {}


  ngOnInit() {}

  removeList(list: List){
    this.dialogRef.close();
    this._filmTraitment.deleteList(list);
    this._filmTraitment.openMessageDialog("La liste "+list.name+" a été supprimée de votre bibliothèque !")
    this.router.navigate(['films']);
  }

}
