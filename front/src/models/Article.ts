import { User } from "@/models/User";

export interface IArticle {
  id: number;
  title: string;
  description: string;
  author: User | null;
  image: string;
  type: string;
  create_at: string;
}

export class Article implements IArticle {
  id: number;
  author: User | null;
  create_at: string;
  description: string;
  image: string;
  title: string;
  type: string;

  constructor(
    id: number,
    author: User,
    create_at: string,
    description: string,
    image: string,
    title: string,
    type: string
  ) {
    this.id = id;
    this.author = author;
    this.create_at = create_at;
    this.description = description;
    this.image = image;
    this.title = title;
    this.type = type;
  }

  public static toArticle(value: Record<string, any>): Article {
    return new Article(
      value.id,
      User.toUser(value.author),
      value.create_at,
      value.description,
      value.image,
      value.title,
      value.type
    );
  }

  public static toJson(value: Article): string {
    return JSON.stringify(value);
  }
}
