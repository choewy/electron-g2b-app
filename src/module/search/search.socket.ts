import { appConfig } from '@config/app.config';
import { SocketManager } from '@core/socket.manager';
import { SearchType } from './dto/enums';
import { SearchFailEvent } from './events/search-fail.event';
import { SearchExcelFileEvent } from './events/search-excel-file.event';
import { SearchCountEvent } from './events/search-count.event';

export class SearchSocket extends SocketManager {
  connection(type: SearchType, searchId: number) {
    this.auth = { searchId };

    this.on('connect', () => console.log('connect'));
    this.on('count', (value) => new SearchCountEvent({ type, value }).dispatch());
    this.on('file', (value) => new SearchExcelFileEvent({ type, value }).dispatch());
    this.on('fail', (value) => new SearchFailEvent({ type, value }).dispatch());

    return this.connect();
  }
}

export const bidsSearchSocket = new SearchSocket(
  appConfig.getServerUrl(),
  { autoConnect: false, reconnection: false },
  'search',
);

export const hrcsSearchSocket = new SearchSocket(
  appConfig.getServerUrl(),
  { autoConnect: false, reconnection: false },
  'search',
);
