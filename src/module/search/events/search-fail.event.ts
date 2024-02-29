import { SearchType } from '../dto/enums';

export class SearchFailEvent extends CustomEvent<{
  type: SearchType;
  value: Error;
}> {
  constructor(detail: { type: SearchType; value: Error }) {
    super(SearchFailEvent.name, { detail });
  }

  dispatch(): void {
    window.dispatchEvent(this);
  }
}
