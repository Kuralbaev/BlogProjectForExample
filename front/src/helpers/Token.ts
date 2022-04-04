const LOCAL_ACCESS_TOKEN = "accessToken";

function parsePart(str: string) {
  return JSON.parse(window.atob(str));
}

function parseJWT(token: string) {
  const parts = token.split(".");

  return {
    header: parsePart(parts[0]),
    payload: parsePart(parts[1]),
    sign: parts[2],
  };
}

class Token {
  static set(token: string): void {
    localStorage.setItem(LOCAL_ACCESS_TOKEN, token);
  }

  static get(): string | null {
    return localStorage.getItem(LOCAL_ACCESS_TOKEN);
  }

  static clear(): void {
    localStorage.removeItem(LOCAL_ACCESS_TOKEN);
  }

  static getJWTPayload(token: string): Record<string, string> {
    return parseJWT(token).payload;
  }
}

export default Token;
