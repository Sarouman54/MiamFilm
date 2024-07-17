export class CommentModel {
    id?: number;
    title?: string;
    description?: Text;
    created_at?: Date;
    updated_at?: Date;
    id_video?: number;
    id_user?: number;
    id_recipe?: number;

    constructor( id: number, title: string, description: Text, created_at: Date, updated_at: Date, id_video: number, id_user: number, id_recipe: number){
        this.id = id,
        this.title = title;
        this.description = description,
        this.id_video = id_video,
        this.id_user = id_user,
        this.id_recipe = id_recipe,
        this.created_at = created_at,
        this.updated_at = updated_at
    }
}
