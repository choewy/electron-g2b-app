import { SearchTaskType } from '../types';

export class HrcsTask {
  private readonly tasks: SearchTaskType[] = [
    { text: '전체', endPoint: '' },
    { text: '물품', endPoint: 'getPublicPrcureThngInfoThngPPSSrch' },
    { text: '공사', endPoint: 'getPublicPrcureThngInfoCnstwkPPSSrch' },
    { text: '용역', endPoint: 'getPublicPrcureThngInfoServcPPSSrch' },
    { text: '외자', endPoint: 'getPublicPrcureThngInfoFrgcptPPSSrch' },
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

export const hrcsTask = new HrcsTask();
