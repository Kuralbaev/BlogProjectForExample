export interface IComment {
  id: number;
  text: string;
  timeout: number;
  critical: boolean;
}

export class Alert implements IComment {
  text: string;
  timeout: number;
  critical: boolean;
  id: number;

  constructor(id: number, text: string, timeout: number, critical: boolean) {
    this.id = id;
    this.text = text;
    this.timeout = timeout;
    this.critical = critical;
  }

  public static toComment(value: Record<string, any>): Alert {
    return new Alert(value.id, value.text, value.timeout, value.critical);
  }

  public static toJson(value: Alert): string {
    return JSON.stringify(value);
  }
}
