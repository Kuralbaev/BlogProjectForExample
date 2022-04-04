export interface IUser {
  id: number;
  name: string | null;
  email: string | null;
}

export class User implements IUser {
  id: number;
  email: string;
  name: string;

  constructor(id: number, email: string, name: string) {
    this.id = id;
    this.email = email;
    this.name = name;
  }

  public static toUser(value: Record<string, any>): User {
    return new User(value.id, value.email, value.username);
  }

  public static toJson(value: User): string {
    return JSON.stringify(value);
  }
}
