export class User {
    id: number;
    email: string;
    password: string;
    jokes: string[];

    constructor(id: number, email: string, password: string, jokes: string[] = []) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.jokes = jokes;
    }
}
