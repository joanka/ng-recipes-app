import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'Omelet With Spinach And Ham', 
            'Tasty and super easy to make!', 'https://www.sindhidunya.com/wp-content/uploads/2017/11/omelet.jpg', 
            [
                new Ingredient('Eggs', 2),
                new Ingredient('Ham', 1),
                new Ingredient('Spinach', 0.5)
            ]),
        new Recipe(
            'Apple Pumpkin Soup', 
            'Perfect for sweater weather!', 'http://www.dietoflife.com/wp-content/uploads/2016/05/Pumpkin-Soup.jpg', 
            [
                new Ingredient('Pumpkin', 0.5),
                new Ingredient('Apples', 1),
                new Ingredient('Carrots', 2)
            ]),
        new Recipe(
            'Chocolate Cookies', 
            'Light and fluffy cookies', 'https://media.mnn.com/assets/images/2015/10/chocolate-chip-cookies-cover.jpg.638x0_q80_crop-smart.jpg', 
            [
                new Ingredient('Eggs', 8),
                new Ingredient('Dark chocolate', 1),
                new Ingredient('Cream', 1.4)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}