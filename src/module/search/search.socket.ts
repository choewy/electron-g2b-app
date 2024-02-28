import { appConfig } from '@config/app.config';
import { SocketManager } from '@core/socket.manager';

export class SearchSocket extends SocketManager {
  connectOnce(searchId: number) {
    this.auth = { searchId };

    this.on('count', (count) => console.log(count));
    this.on('excel-file', (excelFile) => console.log(excelFile));
    this.on('fail', (error) => console.log(error));

    return this.connect();
  }
}

export const searchSocket = new SearchSocket(
  appConfig.getServerUrl(),
  { autoConnect: false, reconnection: false },
  'search',
);
