import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('A Test Recipe','This is simply a test','https://images-na.ssl-images-amazon.com/images/I/510bxKLiABL._SX381_BO1,204,203,200_.jpg'),
      new Recipe('A Test Recipe','This is simply a test','https://images-na.ssl-images-amazon.com/images/I/510bxKLiABL._SX381_BO1,204,203,200_.jpg'),
      new Recipe('A Test Recipe','This is simply a test','https://images-na.ssl-images-amazon.com/images/I/510bxKLiABL._SX381_BO1,204,203,200_.jpg'),
      new Recipe('A Test Recipe','This is simply a test','https://images-na.ssl-images-amazon.com/images/I/510bxKLiABL._SX381_BO1,204,203,200_.jpg')];
  constructor() { }

  ngOnInit() {
  }

}
