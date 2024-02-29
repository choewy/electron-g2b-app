import { SearchType } from '../dto/enums';

export class SearchCountEvent extends CustomEvent<{
  type: SearchType;
  value: number;
}> {
  constructor(detail: { type: SearchType; value: number }) {
    super(SearchCountEvent.name, { detail });
  }

  dispatch(): void {
    window.dispatchEvent(this);
  }
}
