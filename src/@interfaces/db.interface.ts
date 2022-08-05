declare global {
  type Session = {
    sid: string;
    email: string;
    username: string;
    valid: boolean;
  };

  type SessionDB = Record<string, Session>;
}

export {};
