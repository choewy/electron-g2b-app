import { FirebaseKeywordRowType } from '../firebase';

export class EmailRegExp extends RegExp {
  constructor() {
    super(/[a-z0-9]+@[a-z]+.[a-z]{2,3}/);
  }
}

export class PasswordRegExp extends RegExp {
  constructor() {
    super(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
  }
}

export class GmailRegExp extends RegExp {
  constructor() {
    super(/[a-z0-9]+@gmail.com/);
  }
}

export class KeywordRegExp extends RegExp {
  constructor(keywords: FirebaseKeywordRowType[]) {
    super(keywords.map(({ keyword }) => keyword).join('|'));
  }
}
