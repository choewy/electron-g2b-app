import { SearchType } from '../dto/enums';

export class SearchCountEvent extends CustomEvent<{
  type: SearchType;
  count: number;
}> {
  constructor(detail: { type: SearchType; count: number }) {
    console.log(detail);
    super(SearchCountEvent.name, { detail });
  }

  dispatch(): void {
    window.dispatchEvent(this);
  }
}
