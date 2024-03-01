import { Manager, ManagerOptions, Socket } from 'socket.io-client';

export abstract class SocketManager extends Socket {
  constructor(url: string, options?: Partial<ManagerOptions>, nsp?: string) {
    nsp = nsp ?? '/';

    super(
      new Manager(url, {
        transports: ['websocket'],
        withCredentials: true,
        ...options,
      }),

      nsp.startsWith('/') ? nsp : `/${nsp}`,
    );
  }
}
