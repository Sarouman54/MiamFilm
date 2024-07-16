import { Time } from "@angular/common";

export class RecipeModel {
    id?: number;
    title?: string;
    persons?: number;
    preparation_time?: Time;
    ingredients?: string;
    picture?: string;
    description?: Text;
    difficulty?: string;
    note?: number;
    created_at?: Date;
    updated_at?: Date;
}

