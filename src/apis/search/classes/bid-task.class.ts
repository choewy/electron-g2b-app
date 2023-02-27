import { SearchTaskType } from '../types';

export class BidTask {
  private readonly VERSION = '01';

  private get tasks(): SearchTaskType[] {
    return [
      { text: '전체', endPoint: '' },
      {
        text: '물품',
        endPoint: `getBidPblancListInfoThngPPSSrch${this.VERSION}`,
      },
      {
        text: '공사',
        endPoint: `getBidPblancListInfoCnstwkPPSSrch${this.VERSION}`,
      },
      {
        text: '용역',
        endPoint: `getBidPblancListInfoServcPPSSrch${this.VERSION}`,
      },
      {
        text: '외자',
        endPoint: `getBidPblancListInfoFrgcptPPSSrch${this.VERSION}`,
      },
      {
        text: '기타',
        endPoint: `getBidPblancListInfoEtcPPSSrch${this.VERSION}`,
      },
    ];
  }

  get values(): SearchTaskType[] {
    return this.tasks;
  }

  get initValues(): SearchTaskType[] {
    return [this.tasks[0]];
  }

  get otherValues(): SearchTaskType[] {
    return this.tasks.slice(1);
  }

  findByText(text: string): SearchTaskType | undefined {
    return this.tasks.find((task) => task.text === text);
  }
}

export const bidTask = new BidTask();
