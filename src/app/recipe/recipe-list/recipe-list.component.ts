import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes:Recipe[]=[
    new Recipe("Test Recipe", "test description", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg/640px-Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg")
  ];
  constructor(){}

  ngOnInit(){

  }

}
