import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Potatoes', 15),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient); 
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        for(let ingredient of ingredients){
           this.addIngredient(ingredient);
        }
    }
}