export class EmailRegExp extends RegExp {
  constructor() {
    super('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  }
}
