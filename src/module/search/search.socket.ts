import { appConfig } from '@config/app.config';
import { SocketManager } from '@core/socket.manager';
import { SearchCountEvent } from './events/search-count.event';
import { SearchFileEvent } from './events/search-file.event';
import { SearchEndEvent } from './events/search-end.event';

export class SearchSocket extends SocketManager {
  connection() {
    this.on('count', (payload) => new SearchCountEvent(payload).dispatch());
    this.on('file', (payload) => new SearchFileEvent(payload).dispatch());
    this.on('end', (payload) => new SearchEndEvent(payload).dispatch());

    return this.connect();
  }
}

export const searchSocket = new SearchSocket(
  appConfig.getServerUrl(),
  { autoConnect: false, reconnection: true },
  'search',
);
