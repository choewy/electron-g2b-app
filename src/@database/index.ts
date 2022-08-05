import users from './data';

class Database {
  private sessions: SessionDB = {};
  private next = () => {
    const length = Object.keys(this.sessions).length;
    return String(length + 1);
  };

  public getSession(sid: string) {
    const session = this.sessions[sid];
    return session && session.valid ? session : null;
  }

  public createSession(email: string, username: string) {
    const sid = this.next();
    this.sessions[sid] = {
      sid,
      email,
      username,
      valid: true,
    };
    return this.sessions[sid];
  }

  public invalidateSession(sid: string) {
    const session = this.sessions[sid];

    if (session) {
      this.sessions[sid].valid = false;
    }

    return this.sessions[sid];
  }

  public getUser(email: string) {
    return users.find((user) => user.email === email);
  }
}

export const db = new Database();
