import { Time } from "@angular/common";

export class VideoModel {
    id?: number;
    title?: string;
    released?: Date;
    director?: string;
    actors?: string;
    genre?: string;
    type?: string;
    runtime?: Time;
    poster?: string;
    box_office?: number;
    created_at?: Date;
    updated_at?: Date;
}
