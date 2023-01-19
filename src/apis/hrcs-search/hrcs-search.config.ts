export class HrcsSearchConfig {
  public readonly url: string;
  public readonly key: string;

  constructor() {
    this.url = process.env.REACT_APP_G2B_HRCS_URL as string;
    this.key = process.env.REACT_APP_G2B_HRCS_KEY as string;
  }
}
