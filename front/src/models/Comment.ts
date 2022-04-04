import { User } from "@/models/User";

export interface IComment {
  create_at: string;
  description: string;
  author: User | null;
}

export class Comment implements IComment {
  id: number;
  author: User;
  create_at: string;
  description: string;

  constructor(
    id: number,
    author: User,
    description: string,
    create_at: string
  ) {
    this.id = id;
    this.author = author;
    this.create_at = create_at;
    this.description = description;
  }

  public static toComment(value: Record<string, any>): Comment {
    return new Comment(
      value.id,
      User.toUser({
        id: value.author.id,
        username: value.author.username,
        email: value.author.email,
      }),
      value.description,
      value.create_at
    );
  }

  public static toJson(value: Comment): string {
    return JSON.stringify(value);
  }
}
