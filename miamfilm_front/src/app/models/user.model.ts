export class UserModel {
    id?: number;
    last_name?: string;
    first_name?: string;
    username?: string;
    email?: string;
    created_at?: Date;
    updated_at?: Date;
    idRole?: string;

    constructor(id?: number,
        last_name?: string, first_name?: string, username?: string, email?: string, created_at?: Date, updated_at?: Date, idRole?: string){
            this.id = id,
            this.last_name = last_name,
            this.first_name = first_name,
            this.username = username,
            this.email = email,
            this.created_at = created_at,
            this.updated_at = updated_at,
            this.idRole = idRole
    }

}
