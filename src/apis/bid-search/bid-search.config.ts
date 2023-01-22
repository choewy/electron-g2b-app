export class BidSearchConfig {
  public readonly url: string;
  public readonly key: string;

  constructor() {
    this.url = [
      process.env.REACT_APP_G2B_API_URL as string,
      'BidPublicInfoService03',
      'getBidPblancListInfoCnstwkPPSSrch',
    ].join('/');
    this.key = process.env.REACT_APP_G2B_API_KEY as string;
  }
}
