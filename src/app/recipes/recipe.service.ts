import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A test recipe-1', 'This is simply a first test', 'http://maxpixel.freegreatpicture.com/static/photo/2x/Food-Dishes-Eat-Gastronomy-Lunch-Recipe-2760200.jpg'),
        new Recipe('A test recipe-2', 'This is simply a second test', 'http://maxpixel.freegreatpicture.com/static/photo/2x/Food-Dishes-Eat-Gastronomy-Lunch-Recipe-2760200.jpg'),
        new Recipe('A test recipe-3', 'This is simply a third test', 'http://maxpixel.freegreatpicture.com/static/photo/2x/Food-Dishes-Eat-Gastronomy-Lunch-Recipe-2760200.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}