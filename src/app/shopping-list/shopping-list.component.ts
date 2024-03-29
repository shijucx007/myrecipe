import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[] = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatos', 10),
      new Ingredient('Orange', 25),
      new Ingredient('Banana', 8),
      new Ingredient('Mango', 15)
  ];

  constructor() { }

  ngOnInit() {
  }

}
