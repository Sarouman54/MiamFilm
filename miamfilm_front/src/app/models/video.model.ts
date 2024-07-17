import { Time } from "@angular/common";

export class VideoModel {
    id?: number;
    title?: string;
    released?: Date;
    director?: string;
    actors?: string;
    synopsis?: Text;
    genre?: string;
    type?: string;
    runtime?: number;
    synopsis?: Text;
    poster?: string;
    box_office?: number;
    average?: number;
    created_at?: Date;
    updated_at?: Date;


    constructor( id: number, title: string, released: Date, director: string, actors: string, genre: string, type: string, runtime: number, synopsis: Text, poster: string, box_office: number, created_at: Date, updated_at: Date){

        this.id = id,
        this.title = title,
        this.released = released,
        this.director = director,
        this.actors = actors,
        this.synopsis = synopsis,
        this.genre = genre,
        this.type = type,
        this.runtime = runtime,
        this.synopsis= synopsis,
        this.poster = poster,
        this.box_office = box_office,
        this.average = average,
        this.created_at = created_at,
        this.updated_at = updated_at
    }
}
