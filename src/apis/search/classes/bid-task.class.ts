import { SearchTaskType } from '../types';

export class BidTask {
  private readonly tasks: SearchTaskType[] = [
    { text: '전체', endPoint: '' },
    { text: '물품', endPoint: 'getBidPblancListInfoThngPPSSrch01' },
    { text: '공사', endPoint: 'getBidPblancListInfoCnstwkPPSSrch01' },
    { text: '용역', endPoint: 'getBidPblancListInfoServcPPSSrch01' },
    { text: '외자', endPoint: 'getBidPblancListInfoFrgcptPPSSrch01' },
    { text: '기타', endPoint: 'getBidPblancListInfoEtcPPSSrch01' },
  ];

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
