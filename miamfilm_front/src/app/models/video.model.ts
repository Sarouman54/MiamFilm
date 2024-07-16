import { Time } from "@angular/common";

export class VideoModel {
    id?: number;
    title?: string;
    released?: Date;
    director?: string;
    actors?: string;
    genre?: string;
    type?: string;
    runtime?: number;
    poster?: string;
    box_office?: number;
    created_at?: Date;
    updated_at?: Date;

    constructor( id: number, title: string, released: Date, director: string, actors: string, genre: string, type: string, runtime: number, poster: string, box_office: number, created_at: Date, updated_at: Date){
        this.id = id,
        this.title = title,
        this.released = released,
        this.director = director,
        this.actors = actors,
        this.genre = genre,
        this.type = type,
        this.runtime = runtime,
        this.poster = poster,
        this.box_office = box_office,
        this.created_at = created_at,
        this.updated_at = updated_at
    }
}
