import { Time } from "@angular/common";

export class RecipeModel {
    id?: number;
    title?: string;
    persons?: number;
    preparation_time?: number;
    ingredients?: Text;
    picture?: string;
    description?: Text;
    difficulty?: string;
    note?: number;
    created_at?: Date;
    updated_at?: Date;

    constructor(id: number, title: string, persons: number, preparation_time: number, ingredients: Text, picture: string, description: Text, difficulty: string, note: number, created_at: Date, updated_at: Date){
        this.id = id,
        this.title = title,
        this.persons = persons,
        this.preparation_time = preparation_time,
        this.ingredients = ingredients,
        this.picture = picture,
        this.description = description,
        this.difficulty = difficulty,
        this.note = note,
        this.created_at = created_at,
        this.updated_at = updated_at
    }
}

