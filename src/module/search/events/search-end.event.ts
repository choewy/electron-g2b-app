import { SearchType } from '../dto/enums';

export class SearchEndEvent extends CustomEvent<{ type: SearchType; error?: Error }> {
  constructor(detail: { type: SearchType; error?: Error }) {
    super(SearchEndEvent.name, { detail });
  }

  dispatch(): void {
    window.dispatchEvent(this);
  }
}
