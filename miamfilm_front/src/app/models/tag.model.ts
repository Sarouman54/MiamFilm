export class TagModel {
    id?: number;
    name?: string;
    color?: string;
    created_at?: Date;
    updated_at?: Date;

    constructor(id: number, name: string, color: string, created_at: Date, updated_at: Date){
        this.id = id,
        this.name = name,
        this.color = color,
        this.created_at = created_at,
        this.updated_at = updated_at
    }
}
