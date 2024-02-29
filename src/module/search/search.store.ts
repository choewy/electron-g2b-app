import { DateTime } from 'luxon';

import { RecoilStore } from '@core/recoil-store';

import { SearchDto } from './dto/search.dto';
import { SearchType } from './dto/enums';

export type SearchStoreProps = {
  query: {
    type: SearchType;
    types: number[];
    startDate: string;
    endDate: string;
  };
  bids: SearchDto | null;
  hrcs: SearchDto | null;
};

export class SearchStore extends RecoilStore<SearchStoreProps> {
  useTypes() {
    const type = this.useValue().query.type;

    switch (type) {
      case SearchType.Bids:
        return ['물품', '공사', '용역', '외자', '기타'];

      case SearchType.Hrcs:
        return ['물품', '공사', '용역', '외자'];
    }
  }
}

export const searchStore = new SearchStore({
  query: {
    type: SearchType.Bids,
    types: [0, 1, 2, 3, 4],
    startDate: DateTime.local().toSQLDate(),
    endDate: DateTime.local().toSQLDate(),
  },
  bids: null,
  hrcs: null,
});
